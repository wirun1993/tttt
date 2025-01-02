<template>
  <div class="pb-5">
    <!-- <div class="line-border"></div> -->

    <section class="back-system">
      <div class="container">

        <div class="row">
          <div class="pt-5 pb-3">
            <span class="badge text-white containpage font16">{{ this.$route.query.category }}</span>
          </div>
          <div v-for="(value, id) in data_movie" :key="id.id" class="col-6 col-md-2 mt-2 p-2" data-bs-toggle="modal"
            href="#exampleModalToggle" role="button" @click="play_movie(value)">
            <div class="position-relative overflow-hidden"
              :style="'background-image: url(' + value.img + ');background-position: center center;background-size: cover; height: 240px;border-radius: 10px;'">
              <div>
                <span class="info2">&nbsp;&nbsp;&nbsp; {{ extractedNumber(value.txt) }}</span>
                <div class="position-absolute bottom-0 w-100 text-white p-2"
                  style="background: rgba(0, 0, 0, 0.7); border-radius: 0 0 10px 10px; height: 59px;">
                  <div class="text-white font16 px-2 ellips">{{ value.title }}</div>
                  <div class="text-white px-2 font14 ellips me-5"><span class="color-font">{{
                    extractThaiCharacters(value.title) }}</span> </div>
                </div>
              </div>
            </div>
            <div class="info1 color-font">&nbsp;&nbsp;&nbsp;<i class="fa-regular fa-comment "></i> {{
              extractedNumber(value.txt) }}</div>
          </div>
        </div>

      </div>
      <nav aria-label="Page navigation example">
        <ul class="pagination justify-content-center font16 py-5">
          <li class="page-item" :class="{ disabled: currentPage === 1 }">
            <a class="bg-pages page-link" @click.prevent="goToPage(1), beforeRouteEnter()" href="#">First</a>
          </li>
          <li v-for="page in paginationRange" :key="page" class="page-item" data-bs-toggle="modal"
            href="#exampleModalToggle" role="button">
            <a class="px-3 bg-pages page-link" :class="{ active: page === currentPage }"
              @click.prevent="goToPage(page), beforeRouteEnter()" href="#">{{ page }}</a>
          </li>
          <li class="page-item" :class="{ disabled: currentPage === totalPages }">
            <a class="px-3 bg-pages page-link" @click.prevent="goToPage(totalPages), beforeRouteEnter()"
              href="#">Last</a>
          </li>
        </ul>
      </nav>
    </section>



    <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel"
      tabindex="-1">
      <div class="modal-dialog modal-xl modal-fullscreen">
        <div class="modal-content" style="border: 1px solid #7d7d7d;">
          <div class="modal-header backnav-top pb-2" style="border: 0px solid #ffff;">
            <div to="/">
              <img width="120" height="50" src="/../../logo-movie.png" class="attachment-full size-full" alt=""
                srcset="/../../logo-movie.png 400w, /../../logo-movie.png 300w" sizes="(max-width: 400px) 100vw, 400px">
            </div>
            <i class="fa-solid fa-xmark font26 text-light cursor-point" data-bs-dismiss="modal" aria-label="Close"></i>
          </div>
          <div class="modal-body justify-content-center"
            style="background: url(https://ideabet.live/theme/10nweb/newsmovie/wp-content/uploads/2022/03/download-6.jpg);background-position: center center;background-size: cover;">
            <div class="text-center pt-3"><a class="font30 text-center lementor-154" href="https://www.new-hd.com/"
                target="_parent" style="color: #FFD45F;">
                ดูหนังออนไลน์ ดูหนังกดที่นี่</a>
            </div>
            <div class="text-center pt-4"><a class="font30 text-center lementor-154" href="https://www.new-hd.com/"
                style="color: #FFD45F;">ดูหนังออนไลน์ ดูหนังกดที่นี่</a>
            </div>
            <div>
              <div class="text-light font22 pt-5 p-3 text-center">{{ title_movie.title }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import axios from 'axios'
import JQuery from 'jquery'
export default {
  name: 'MovieHome',
  layout: 'layouts',

  data() {
    return {
      currentPage: parseInt(this.$route.query.page) || 1,
      totalPages: 0,  // Total number of pages
      maxPagesToShow: 5,  // Maximum number of pages to display at a time
      data_movie: [],

      title_movie: [],
    };
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

  mounted() {

  },

  methods: {
    async Getmovie() {
      $('.loading').fadeIn();
      let options = {
        method: 'GET',
        url: 'https://movie.xn--l3c7b.net/feed?page=' + this.$route.query.page + '&category=' + this.$route.query.category,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      };

      try {
        let response = await axios(options);
        this.data_movie = response.data.data
        this.totalPages = response.data.page.last
        $('.loading').fadeOut();
      } catch (error) {
        console.error('An error occurred:', error);
      }
    },

    extractedNumber(str) {
      const match = str.match(/\d+\.\d+/);
      return match ? match[0] : null;
    },

    extractThaiCharacters(title) {
      return title.replace(/[^\u0E00-\u0E7F\s]/g, '');
    },

    goToPage(page) {
      if (page < 1 || page > this.totalPages) return;
      this.$router.push({ path: this.$route.path, query: { ...this.$route.query, page } });
    },
    
    play_movie(str) {
      this.title_movie = str;
    },
  },

  watch: {
    '$route.query.category': {
      immediate: true,
      handler(newValue, oldValue) {
        this.Getmovie();
      }
    },
    '$route.query.page'(newPage) {
      this.currentPage = parseInt(newPage) || 1;
    }
  },

  beforeRouteEnter(to, from, next) {
    next(vm => {
      if (to.query.category) {
        vm.Getmovie();
      }
    });
  },


};
</script>