<template>
    <div>
        <div class="loading" style="display: none;">
            <div class="loader"></div>
        </div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light backnav-top ">
            <div class="container-xxl">
                <nuxt-link to="/" >
                    <img width="150" height="60" src="/../../logo-movie.png" class="attachment-full size-full" alt=""
                        srcset="/../../logo-movie.png 400w, /../../logo-movie.png 300w"
                        sizes="(max-width: 400px) 100vw, 400px">
                </nuxt-link>
                <button class="btn btn-light navbar-toggler" type="button" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-center" id="navbarScroll">
                    <div class="d-flex">
                        <nuxt-link to="/" class="text-white ps-nav-5 pe-5 cursor-point">หน้าแรก</nuxt-link>
                        <div class="text-white pe-5 cursor-point" @click="Titlemovie(menu1)">{{ menu1 }}</div>
                        <div class="text-white pe-5 cursor-point" @click="Titlemovie(menu2)">{{ menu2 }}</div>
                        <div class="text-white pe-5 cursor-point" @click="Titlemovie(menu3)">{{ menu3 }}</div>
                        <div class="text-white pe-5 cursor-point" @click="Titlemovie(menu4)">{{ menu4 }}</div>
                    </div>
                    <div class="ms-auto">
                        <div class="text-white btn btn-light" type="button" data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><span
                                class="navbar-toggler-icon"></span>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
            <div class="offcanvas-header backnav-top">
                <a href="#">
                    <img width="150" height="60" src="/../../logo-movie.png" class="attachment-full size-full" alt=""
                        srcset="/../../logo-movie.png 400w, /../../logo-movie.png 300w"
                        sizes="(max-width: 400px) 100vw, 400px">
                </a>
                <button type="button" class="btn-close text-light " data-bs-dismiss="offcanvas" aria-label="Close"><i
                        class="fa-solid fa-xmark font24"></i></button>
            </div>
            <div class="offcanvas-body back-system">
                <div v-for="(value, id) in menu" :key="id.id" class="p-1 font16 text-light cursor-point"
                    data-bs-dismiss="offcanvas" aria-label="Close" @click="Titlemovie(value)">{{ value }}</div>
            </div>
        </div>

        <!-- การแสดงผล -->
        <div class="detail-body">
            <nuxt-child />
        </div>

        <!-- การแสดงผล -->

        <section class="fixed-bottom">
            <div class="line-border-buttom"></div>
            <div class="footer-buttom">
                <div class="container-xxl pt-5 pb-mobile">
                    <div class="row">
                        <div class="col-12 col-lg-6 pb-5">
                            <img width="150" height="" src="/../../logo-movie.png" alt="">
                            <div class="text-white pt-3 font14">ใครที่พลาดฟุตบอลทุกคู่เด็ดเมื่อคืน ไทยสบายวาไรตี้
                                ได้จัดไฮไลท์ฟุตบอลล่าสุด
                                และสำหรับใครที่พลาดทีมโปรด ติดตามไฮไลท์ ได้ที่นี่
                            </div>
                        </div>
                        <div class="col-4 col-lg-2">
                            <div class="text-white pb-3">ข่าวหนังไทย</div>
                            <div class="color-bottom-system font14">Tutorials</div>
                            <div class="color-bottom-system font14">Resources</div>
                            <div class="color-bottom-system font14">Guides</div>
                        </div>
                        <div class="col-4 col-lg-2">
                            <div class="text-white pb-3">ช่องทางชมสตรีมมิ่ง</div>
                            <div class="color-bottom-system font14">Stories</div>
                            <div class="color-bottom-system font14">Community</div>
                            <div class="color-bottom-system font14">Blog</div>
                        </div>
                        <div class="col-4 col-lg-2">
                            <div class="text-white pb-3">ข่าวหนังต่างประเทศ</div>
                            <div class="color-bottom-system font14">Flex UI Kit</div>
                            <div class="color-bottom-system font14">Modern UI Kit</div>
                            <div class="color-bottom-system font14">Framer UI Kit</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import qs from 'qs'
import JQuery from 'jquery'
import axios from 'axios'

export default {
    name: 'MovieLayouts',

    data() {
        return {
            menu: '',
            menu1: '',
            menu2: '',
            menu3: '',
            menu4: '',
        };
    },

    mounted() {
        this.Getmenu();
    },

    methods: {
        Titlemovie(title) {
            // this.$router.push('/app/home?category=' + title + '&page=1')
        },

        Titlemovie(title) {
            this.$router.push({
                path: '/app/home',
                query: { category: title, page: 1 }
            });
        },

        async Getmenu() {
            $('.loading').fadeIn();
            let options = {
                method: 'GET',
                url: 'https://movie.xn--l3c7b.net/feed',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            };
           
            try {
                let response = await axios(options);
                this.menu = response.data.category.list;
                this.menu1 = response.data.category.list[0];
                this.menu2 = response.data.category.list[1];
                this.menu3 = response.data.category.list[2];
                this.menu4 = response.data.category.list[3];
                $('.loading').fadeOut();
            } catch (error) {
                // Handle error case
                console.error('An error occurred:', error);
            }
        }


    },
};
</script>