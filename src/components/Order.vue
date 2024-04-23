<template>
    <div class="q-pa-md">
      <!-- Thanh navbar -->
      <div class="q-gutter-md q-mb-md">
        <q-btn-group size="md">
          <q-btn label="Tất cả đơn mượn" @click="filterOrders('all')" />
          <q-btn label="Đang chờ" @click="filterOrders('pending')" />
          <q-btn label="Đã được chấp nhận" @click="filterOrders('approved')" />
          <q-btn label="Đã hủy/Từ chối" @click="filterOrders('rejected')" />
          <q-btn label="Đã hoàn thành" @click="filterOrders('completed')" />
        </q-btn-group>
      </div>
  
      <!-- Bảng hiển thị đơn hàng -->
      <q-table title="Đơn mượn sách của bạn" :rows="filteredOrders" :columns="columns" row-key="name" :filter="filter" grid hide-header>
        <template v-slot:item="props">
          <div class="q-pa-xs col-xs-12 col-sm-6 col-md-4 col-lg-3 grid-style-transition">
            <q-card bordered flat>
              <q-card-section>
                <q-btn v-if="props.row.status === 'pending'" label="Cancel" color="negative" @click="rejectOrder(props.row._id)" class="q-ml-md" />
                <h6>{{ props.row.bookName }}</h6>
              </q-card-section>
              <q-separator />
              <q-list dense>
                <q-item v-for="col in props.cols.filter(col => col.name !== 'desc')" :key="col.name">
                  <q-item-section>
                    <q-item-label>{{ col.label }}</q-item-label>
                  </q-item-section>
                  <q-item-section side>
                    <q-item-label caption>{{ col.value }}</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-card>
          </div>
        </template>
      </q-table>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue'
  import axios from 'axios'
  import { useToast } from 'vue-toastification';
  const toast = useToast();

  const columns = [
    {
      name: 'index',
      label: '#',
      field: 'index'
    },
    {
      name: 'orderId',
      label: 'Order ID',
      field: '_id'
    },
    {
      name: 'bookName',
      label: 'Bìa sách',
      field: 'bookName'
    },
    {
      name: 'address',
      label: 'Địa chỉ',
      field: 'address'
    },
    {
      name: 'status',
      label: 'Trạng thái đơn mượn',
      field: 'status'
    },
    {
      name: 'quantity',
      label: 'Số lượng',
      field: 'quantity'
    },
    {
      name: 'startDate',
      label: 'Ngày mượn',
      field: 'startDate'
    },
    {
      name: 'endDate',
      label: 'Yêu cầu trả sách trước ngày',
      field: 'endDate'
    },
  ]
  
  export default {
    setup() {
      const rows = ref([]);
      const filteredOrders = ref([]);
      let allOrders = [];
  
      onMounted(async () => {
        try {
          const token = localStorage.getItem('token');
          const response = await axios.get('http://localhost:3333/api/user/orders', {
            headers: {
              token: `Bearer ${token}`
            }
          });
  
          allOrders = response.data.map((order, index) => ({
            ...order,
            index: index + 1
          }));
  
          // Mặc định hiển thị tất cả đơn hàng
          filteredOrders.value = allOrders;
        } catch (error) {
          console.error(error)
        }
      })
  
      // Phương thức lọc đơn hàng dựa trên trạng thái
      const filterOrders = (status) => {
        if (status === 'all') {
          filteredOrders.value = allOrders;
          filteredOrders.value.sort((a, b) => b.index - a.index);
        } else {
          filteredOrders.value = allOrders.filter(order => order.status === status);
          filteredOrders.value.sort((a, b) => b.index - a.index);
        }
      }
  
      // Phương thức xử lý khi hủy đơn hàng
      const rejectOrder = async (orderId) => {
        try {
          const token = localStorage.getItem('token');
          const response = await axios.put('http://localhost:3333/api/order/update', {
            orderId: orderId,
            status: 'rejected'
          }, {
            headers: {
              token: `Bearer ${token}`
            }
          });
          location.reload();
        } catch (error) {
          console.error(error);
        }
      }
  
      return {
        filterOrders,
        rejectOrder,
        columns,
        filteredOrders
      }
    }
  }
  </script>
  
  <style lang="sass">

  </style>
  