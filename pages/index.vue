<template>
  <div>
    <section class="elementor-154 pb-5">
      <div class="elementor-widget-container container-xxl ">
        <div class="elementor-element elementor-element-811538f elementor-widget elementor-widget-image"
          data-id="811538f" data-element_type="widget" data-widget_type="image.default">
          <div class="elementor-widget-container text-center d-none d-sm-block">
            <img fetchpriority="high" decoding="async" width="248" src="/../../logo-movie.png"
              class="attachment-medium_large size-medium_large" alt=""
              srcset="/../../logo-movie.png 768w, /../../logo-movie.png 1536w, /../../logo-movie.png 2048w"
              sizes="(max-width: 768px) 100vw, 768px">
          </div>
        </div>
        <div class="row flex-scroll">
          <div v-for="(val, id) in movie_chonrong" :key="id.id" class="col-7 col-lg-2 pb-2 p-2" data-bs-toggle="modal"
            href="#exampleModalToggle" role="button" @click="play_movie(val)">
            <div class="position-relative overflow-hidden"
              :style="'background-image: url(' + val.img + ');background-position: center center;background-size: cover; height: 240px;border-radius: 10px;'">
              <div class="position-absolute bottom-0 w-100 text-white p-3"
                style="background: linear-gradient(to top, rgb(0 0 0), rgba(0, 0, 0, 0)); border-radius: 0 0 10px 10px;height: 70px;">
                <div class="text-white font16 px-2 ellips">{{ val.title }}</div>
                <div class="text-white px-2 font14 ellips me-5"><span class="color-font">{{
                  extractThaiCharacters(val.title) }}</span> </div>
              </div>
            </div>
            <div class="info1 color-font">&nbsp;&nbsp;&nbsp;<i class="fa-regular fa-comment "></i> {{
              extractedNumber(val.txt) }}</div>
          </div>
        </div>
      </div>
    </section>

    <div class="line-border"></div>

    <section class="back-system">
      <div class="container-xxl">
        <div class="pt-5 pb-3">
          <div class="text-center text-white containpage">หนังใหม่</div>
        </div>
        <div class="row flex-scroll">
          <div v-for="(val, id) in movie_new" :key="id.id" class="col-10 col-lg-2 pb-2" data-bs-toggle="modal"
            href="#exampleModalToggle" role="button">
            <div class="position-relative overflow-hidden"
              :style="'background-image: url(' + val.img + ');background-position: center center;background-size: cover; height: 240px;border-radius: 10px;'">
              <div>
                <div class="position-absolute bottom-0 w-100 text-white p-3"
                  style="background: rgba(0, 0, 0, 0.7); border-radius: 0 0 10px 10px; height: 70px;">
                  <div class="text-white font16 px-2 ellips">{{ val.title }}</div>
                  <div class="text-white px-2 font14 ellips me-5"><span class="color-font">{{
                    extractThaiCharacters(val.title) }}</span> </div>
                </div>
                <div class="position-absolute top-0 w-100 text-white p-3"
                  style="background: linear-gradient(to bottom, rgb(0 0 0 / 65%), rgba(0, 0, 0, 0)); border-radius: 0 0 10px 10px;height: 50%;">
                </div>
                <div class="position-absolute right-0 w-100 text-white p-3"
                  style="background: linear-gradient(to left, rgb(0 0 0 / 10%), rgba(0, 0, 0, 0)); border-radius: 0px 0px 10px 10px; height: 100%;">
                </div>
                <div class="position-absolute left-0 w-100 text-white p-3"
                  style="background: linear-gradient(to right, rgb(0 0 0 / 10%), rgba(0, 0, 0, 0)); border-radius: 0px 0px 10px 10px; height: 100%;">
                </div>
                <div class="info1 color-font">&nbsp;&nbsp;&nbsp;<i class="fa-regular fa-comment "></i> {{
                  extractedNumber(val.txt) }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


    <section class="back-system">
      <div class="container-xxl">
        <div class="pt-5">
          <div class="color-logo">หนังมาแรงติดอันดับยอดฮิต</div>
        </div>

        <div class="row">
          <div class="col-12 col-lg-4">
            <div class="pt-5 pb-3">
              <div class="badge text-white containpage font14">หนังมาแรง</div>
            </div>
            <div class="row flex-scroll">
              <div v-for="(val, id) in movie_new2" :key="id.id" class="col-10 pb-2" data-bs-toggle="modal"
                href="#exampleModalToggle" role="button">
                <div class="position-relative overflow-hidden d-flex justify-content-center align-items-center"
                  :style="'background-image: url(' + val.img + ');background-position: center center;background-size: cover; height: 240px;border-radius: 10px;'">
                  <div class="text-center w-100 position-absolute text-white p-3"
                    style="border-radius: 0 0 10px 10px; background-color: rgba(0, 0, 0, 0.5);">
                    <div class="font22 ellips">{{ val.title }}</div>
                    <div class="font14 ellips"><span class="color-font">{{
                      extractThaiCharacters(val.title) }}</span> </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <!-- เล็กๆ -->
          <div class="col-12 col-lg-8">
            <div class="pt-5 pb-3">
              <div class="badge text-white containpage font14">หนังแนะนำ</div>
            </div>
            <div class="row flex-scroll">
              <div v-for="(val, id) in movie_new2_small" :key="id.id" class="col-10 col-lg-3 pb-2"
                data-bs-toggle="modal" href="#exampleModalToggle" role="button">
                <div class="position-relative overflow-hidden"
                  :style="'background-image: url(' + val.img + ');background-position: center center;background-size: cover; height: 160px;border-radius: 10px 10px 0px 0px;'">
                </div>
                <div class="card card-title">
                  <div class="bottom-0 w-100 text-white "
                    style="background: rgb(0 0 0 / 83%); border-radius: 0 0 0 0px;">
                    <div class="text-white font16 px-4 ellips">{{ val.title }}</div>

                    <div class="text-white px-4 font14 ellips"><span class="color-font">{{
                      extractThaiCharacters(val.title) }}</span> </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="line-border-buttom"></div>
    <div data-elementor-type="wp-page" data-elementor-id="154" class="elementor elementor-154"
      data-elementor-settings="[]">
      <section
        class=" elementor-section elementor-top-section elementor-element elementor-element-ed20645 elementor-section-height-min-height uael-particle-yes uael-particle-adv-yes elementor-section-boxed elementor-section-height-default elementor-section-items-middle">
        <div class="uael-particle-wrapper" id="uael-particle-ed20645"><canvas class="tsparticles-canvas-el"
            style="width: 100%; height: 100%; pointer-events: initial;" width="1263" height="558"></canvas>
        </div>
        <div class="elementor-container elementor-column-gap-default">
          <div
            class="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-fbaffc8"
            data-id="fbaffc8" data-element_type="column">
            <div class="elementor-widget-wrap elementor-element-populated">
              <div class="elementor-element elementor-element-3d9151c elementor-widget elementor-widget-heading"
                data-id="3d9151c" data-element_type="widget" data-widget_type="heading.default">
                <div class="elementor-widget-container">
                  <h2 class="elementor-heading-title elementor-size-default pb-5" id="ep-3d9151c">
                    Update everyday.</h2>
                </div>
              </div>
              <div class="elementor-element elementor-element-0fd663d elementor-widget elementor-widget-text-editor"
                data-id="0fd663d" data-element_type="widget" data-widget_type="text-editor.default">
                <div class="elementor-widget-container">
                  <p>เราอัปเดทหนังใหม่ทุกวัน ทั้งหนังไทย หนังฝรั่ง ซีรีย์ดัง การ์ตูนสำหรับเด็ก
                    หรือไปจนถึงหนังผู้ใหญ่
                    เพื่อความเพลิดเพลินอย่างไร้ขีดจำกัด 24 ชม.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            class="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-d655e21"
            data-id="d655e21" data-element_type="column">
            <div class="elementor-widget-wrap">
            </div>
          </div>
        </div>
      </section>
    </div>






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
import JQuery from 'jquery'
import axios from 'axios'
export default {
  name: 'MovieIndex',
  layout: 'layouts',

  data() {
    return {
      movie_chonrong: [],
      movie_new: [],
      movie_new2: [],
      movie_new2_small: [],

      title_movie: [],
    };
  },

  mounted() {
    this.Getmovie_show();
    this.Getmovie_new();
    this.Getmovie_new2();
  },

  methods: {
    async Getmovie_show() {
      // $('.loading').fadeIn();
      let options = {
        method: 'GET',
        url: 'https://movie.xn--l3c7b.net/feed?category=การ์ตูน&page=1',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      };

      try {
        let response = await axios(options);
        this.movie_chonrong = response.data.data.slice(8, 14);
        // $('.loading').fadeOut();
      } catch (error) {
        console.error('An error occurred:', error);
      }
    },

    async Getmovie_new() {
      // $('.loading').fadeIn();
      let options = {
        method: 'GET',
        url: 'https://movie.xn--l3c7b.net/feed?category=หนังใหม่&page=1',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      };

      try {
        let response = await axios(options);
        this.movie_new = response.data.data.slice(0, 6);
        // $('.loading').fadeOut();
      } catch (error) {
        console.error('An error occurred:', error);
      }
    },

    async Getmovie_new2() {
      // $('.loading').fadeIn();
      let options = {
        method: 'GET',
        url: 'https://movie.xn--l3c7b.net/feed?category=หนังชนโรง&page=2',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      };

      try {
        let response = await axios(options);
        this.movie_new2 = response.data.data.slice(0, 2);
        this.movie_new2_small = response.data.data.slice(3, 11)
        // $('.loading').fadeOut();
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

    play_movie(str) {
      this.title_movie = str
    },
  },
};
</script>