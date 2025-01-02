<template>
    <div>
      <nav aria-label="Page navigation example">
        <ul class="pagination justify-content-center font16 py-5">
          <li class="page-item" :class="{ disabled: currentPage === 1 }">
            <a class="bg-pages page-link" @click.prevent="goToPage(1)" href="#">Previous</a>
          </li>
          <li v-for="page in paginationRange" :key="page" class="page-item">
            <a 
              class="px-3 bg-pages page-link" 
              :class="{ active: page === currentPage }" 
              @click.prevent="goToPage(page)" 
              href="#"
            >{{ page }}</a>
          </li>
          <li class="page-item" :class="{ disabled: currentPage === totalPages }">
            <a class="px-3 bg-pages page-link" @click.prevent="goToPage(totalPages)" href="#">Next</a>
          </li>
        </ul>
      </nav>
      <!-- Content for the page goes here -->
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        currentPage: parseInt(this.$route.query.page) || 1,
        totalPages: 100,  // Total number of pages
        maxPagesToShow: 5,  // Maximum number of pages to display at a time
      }
    },
    computed: {
      paginationRange() {
        const half = Math.floor(this.maxPagesToShow / 2);
        let start = this.currentPage - half;
        let end = this.currentPage + half;
  
        if (start < 1) {
          start = 1;
          end = Math.min(this.maxPagesToShow, this.totalPages);
        } 
        
        if (end > this.totalPages) {
          end = this.totalPages;
          start = Math.max(1, this.totalPages - this.maxPagesToShow + 1);
        }
  
        const pages = [];
        for (let i = start; i <= end; i++) {
          pages.push(i);
        }
        return pages;
      }
    },
    watch: {
      '$route.query.page'(newPage) {
        this.currentPage = parseInt(newPage) || 1;
      }
    },
    methods: {
      goToPage(page) {
        if (page < 1 || page > this.totalPages) return;
        this.$router.push({ path: this.$route.path, query: { ...this.$route.query, page } });
      }
    }
  }
  </script>
  
  <style>
  .bg-pages {
    background-color: #f8f9fa;
  }
  
  .page-link.active {
    background-color: #ab9140 ;
    color: white;
  }
  
  .page-item.disabled .page-link {
    pointer-events: none;
    opacity: 0.6;
  }
  </style>
  