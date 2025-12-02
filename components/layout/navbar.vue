<template>
    <div class="navbar-component">
        <v-app-bar
            fixed
            app
            :class='{change_color: scrollPosition > 50}'
            >
            <v-container>
                <v-row>
                    <nuxt-link to="/">
                    <v-toolbar-title>
                        <img src="../../assets/images/logo.svg" alt="logo"/>
                    </v-toolbar-title>
                </nuxt-link>
                <div v-if="$vuetify.breakpoint.mdAndUp && !$vuetify.breakpoint.mdAndDown" class="contOfNav">
                    <!-- About Us -->
                    <nuxt-link aria-label="home" rel="canonical" to="/about" class="link">
                    <v-btn v-ripple="false" aria-label="home" plain class="navTitle">About Us</v-btn>
                    <div class="gradiant"></div>
                    </nuxt-link>
                    <!-- Mission & Vision -->
                    <nuxt-link aria-label="about-us" rel="canonical" to="/mission-vision" class="link">
                    <v-btn v-ripple="false" aria-label="aboutus" plain class="navTitle">Mission & Vision</v-btn>
                    <div class="gradiant"></div>
                    </nuxt-link>
                    <!-- Contact us -->
                    <nuxt-link aria-label="services" rel="canonical" to="/#contact" class="link">
                    <v-btn v-ripple="false" aria-label="whoWeServe" plain class="navTitle">Contact us</v-btn>
                    <div class="gradiant"></div>
                    </nuxt-link>
                </div>
                <v-spacer />
                <v-btn  aria-label="rent" outlined class="rent-btn" to="/">
                    Get Started
                </v-btn>
                </v-row>
            </v-container>
        </v-app-bar>
    </div>
</template>
<script>
export default {
    data() {
        return {
            title: 'Vuetify.js',
            scrollPosition: null,
        }
    },
    mounted() {
        window.addEventListener('scroll', this.updateScroll);
    },
    methods: {
        updateScroll() {
            this.scrollPosition = window.scrollY
        },
    }
}
</script>
<style lang="scss">
    .navbar-component{
        .v-app-bar{
            background: transparent !important;
            box-shadow: unset !important;
        }
        .change_color {
            background: #0C132F !important;
        }
        .contOfNav {
            display: flex;
            margin: 0 10px 0 50px;
            .navTitle {
                padding: 0 8px !important;
                margin: 0 12px;
                color: #fff;
                font-family: Lato, serif !important;
                font-size: 18px !important;
                font-weight: 700;
                letter-spacing: 0 !important;
                text-transform: capitalize !important;
                span {
                opacity: 1 !important;
                }
            }
        }
        .rent-btn{
            border: 1px solid $second-color !important;
            color: $second-color !important;
            background-color: transparent !important;
            &:before{
                background-color: transparent;
            }
        }
    }
</style>