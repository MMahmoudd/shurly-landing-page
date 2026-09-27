<template>
  <div class="slider-list-component">
    <v-container fluid>
        <!-- <v-row> -->
                <div class="carousel-wrapper">
                <VueSlickCarousel v-bind="carouselSettings">
                    <div class="swiper-slide">  
                        <h1>{{ $t('landing.slider.title') }}</h1>
                    </div>
                <div v-for="(slide, index) in boxes" :key="index" class="swiper-slide">
                    <div class="box">
                        <p class="comment">
                            {{slide.comment}}
                        </p>
                        <div class="d-flex">
                            <v-lazy class="text-center" v-model="isActive" :options="{threshold: .5}" transition="fade-transition">
                                <picture>
                                    <v-img class="district-img" loading="lazy" :src="slide.image" alt="screen-1" />
                                </picture>
                            </v-lazy>
                            <div>
                                <p class="name">
                                {{slide.name}}
                            </p>
                            <p class="position">
                                {{slide.position}}
                            </p>
                            </div>
                        </div>
                    </div>

                </div>
                </VueSlickCarousel>
            </div>
        <!-- </v-row> -->
    </v-container>
  </div>
</template>
<!-- Scripts -->
<script>
  import VueSlickCarousel from "vue-slick-carousel";
  import "vue-slick-carousel/dist/vue-slick-carousel.css";
  import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
  import image1 from '../../assets/images/image.png'
  import image2 from '../../assets/images/image (1).png'
  import image3 from '../../assets/images/image (2).png'

    export default {
        name: "slider",
        components: {
        VueSlickCarousel,
        },
        data() {
            return {
                isActive: false,
                profileImages: [image1, image2, image3, image1, image2, image3, image1],
        settingsCatogries: {
            ltr: true,
            focusOnSelect: true,
            speed: 1000,
            slidesToShow: 3,
            slidesToScroll: 3,
            touchThreshold: 3,
            autoplay: true,
            arrows: false,
            dots: false,
            infinite: true,
            autoplaySpeed: 2000,
            centerMode: true,
            rows: 1,
            useCSS: true,
            centerPadding: "9px",
            pauseOnFocus: true,
            pauseOnHover: true,
            responsive: [
            {
                breakpoint: 2600,
                settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: false,
                centerMode: true,
                centerPadding: "9px",
                },
            },
            {
                breakpoint: 1100,
                settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: false,
                centerMode: false,
                centerPadding: "9px",
                },
            },
            {
                breakpoint: 790,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
                centerMode: false,
                centerPadding: "9px",
                },
            },
            {
                breakpoint: 700,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
                centerMode: false,
                centerPadding: "9px",
                },
            },
            {
                breakpoint: 200,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
                centerMode: false,
                centerPadding: "9px",
                },
            },
            ],
        },
            }
        },
        computed: {
            carouselSettings() {
                return {
                    ...this.settingsCatogries,
                    ltr: this.$i18n.locale !== 'ar'
                }
            },
            boxes() {
                const localizedBoxes = this.$t('landing.slider.boxes')
                if (!Array.isArray(localizedBoxes)) {
                    return []
                }

                return localizedBoxes.map((box, index) => ({
                    ...box,
                    image: this.profileImages[index] || image1
                }))
            },
        },
    }
</script>
<style lang="scss">
      .slider-list-component{
        height: 400px;
      width: 100% !important;
      background: transparent !important;
    .slick-track{
      display: flex;
      align-items: center;
      .slick-slide {
        position: relative;
        padding: 0px 8px;
        // margin: 0 15px;
        background: transparent !important;
        color: $main-color;
        h1{
            font-size: 40px !important;
            font-weight: 600 !important;
        }
        .box{
            background: #27BDBE0F;
            padding: 35px 50px;
            border: 2px solid #27BDBE;
            border-radius: 16px;
            .comment{
                font-size: 14px !important;
                font-weight: 600 !important;
                margin-bottom: 50px !important;
            }
            .name{
                font-size: 14px !important;
                font-weight: 600 !important;
                margin-bottom: 0;
                margin-left: 10px;
            }
            .position{
                font-size: 12px !important;
                font-weight: 400 !important;
                margin-bottom: 0;
                margin-left: 10px;
            }

        }
        .picture{
          position: relative;
        }
        .district-img{
          width: 48px;
          height: 48px;
          border-radius: 50%;
          .v-image__image{
            background-size: contain !important;
          }
        }
      }
    }
    .slick-dots {
      display: none !important;
      position: absolute !important;
      top: 120%;
      li button:before{
        color: $second-color;
        font-size: 10px;
      }
    }
  }
  @media (max-width: 1263px) {
    .slider-list-component{
      height: auto;
      padding: 24px 0;
      .slick-track .slick-slide .box{
        padding: 28px 24px;
      }
    }
  }
  @media (max-width: 959px) {
    .slider-list-component{
      .slick-track .slick-slide{
        h1{
          font-size: 30px !important;
        }
        .box{
          padding: 20px 16px;
          .comment{
            margin-bottom: 28px !important;
          }
        }
      }
    }
  }
</style>