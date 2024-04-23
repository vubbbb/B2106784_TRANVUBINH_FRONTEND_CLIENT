<template>
  <q-layout view="hHh lpR fFf" class="bg-grey-1">
    <!-- Header -->
    <q-header elevated class="bg-white text-grey-8" height-hint="64">
      <q-toolbar class="GNL__toolbar">
        <!-- Menu Button -->
        <q-btn flat dense round @click="toggleLeftDrawer" aria-label="Menu" icon="menu" class="q-mr-sm" />

        <!-- Title -->
        <q-toolbar-title v-if="$q.screen.gt.xs" shrink class="row items-center no-wrap">
          <span class="q-ml-sm">Sportbook 2VB</span>
        </q-toolbar-title>

        <q-space />

        <!-- Search Input -->
        <q-input class="GNL__toolbar-input" outlined dense v-model="search" color="bg-grey-7 shadow-1"
          placeholder="Nhập tên sách cần tìm" @keypress.enter="searchBooks">
          <template v-slot:prepend>
            <q-icon v-if="search === ''" name="search" />
            <q-icon v-else name="clear" class="cursor-pointer" @click="clearSearch" />
          </template>
        </q-input>

        <q-space />
      </q-toolbar>
    </q-header>

    <!-- Left Drawer -->
    <q-drawer v-model="leftDrawerOpen" show-if-above bordered class="bg-white" :width="280">
      <!-- Drawer Content -->
      <q-scroll-area class="fit">
        <q-list padding class="text-grey-8">
          <!-- Dynamic Navigation Links -->
          <q-item class="GNL__drawer-item" v-ripple v-for="link in navigationLinks" :key="link.text" :to="link.link"
            clickable>
            <q-item-section avatar>
              <q-icon :name="link.icon" />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ link.text }}</q-item-label>
            </q-item-section>
          </q-item>

          <q-separator inset class="q-my-sm" />

          <!-- Static Footer Links -->
          <div class="q-mt-md">
            <div class="flex flex-center q-gutter-xs">
              <a class="GNL__drawer-footer-link" href="https://github.com/vubbbb" aria-label="Privacy"
                target="_blank">Github</a>
            </div>
          </div>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <!-- Page Content -->
    <q-page-container class="q-mx-auto q-my-auto main-router-view">
      <!-- Router View -->
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import router from '../router';

export default {
  name: 'GoogleNewsLayout',

  setup() {
    const leftDrawerOpen = ref(false)
    const search = ref('')
    const route = useRoute()

    // Navigation Links
    const navigationLinks = computed(() => {
      return [
        { icon: 'web', text: 'Cập nhật mới', link: '/dashboard' },
        { icon: 'book', text: 'Sách', link: '/books' },
        { icon: 'person', text: 'Thông tin tài khoản', link: '/user' },
        { icon: 'inventory', text: 'Đơn mượn của bạn', link: '/orders' }
      ]
    })

    function toggleLeftDrawer() {
      leftDrawerOpen.value = !leftDrawerOpen.value
    }

    function clearSearch() {
      search.value = ''
    }

    function searchBooks() {
      if (search.value.trim() !== '') {
        // Navigate to search results page with search query
        router.push('/search?q=' + search.value.trim())
      }
    }

    return {
      leftDrawerOpen,
      search,
      navigationLinks,
      toggleLeftDrawer,
      clearSearch,
      searchBooks
    }
  }
}
</script>

<!-- Add your styles here -->
<style lang="sass">
.GNL
  &__toolbar
    height: 64px

  &__toolbar-input
    width: 55%

  &__drawer-item
    line-height: 24px
    border-radius: 0 24px 24px 0
    margin-right: 12px

    .q-item__section--avatar
      .q-icon
        color: #5f6368

    .q-item__label
      color: #3c4043
      letter-spacing: .01785714em
      font-size: .875rem
      font-weight: 500
      line-height: 1.25rem

  &__drawer-footer-link
    color: inherit
    text-decoration: none
    font-weight: 500
    font-size: .75rem

    &:hover
      color: #000
</style>
