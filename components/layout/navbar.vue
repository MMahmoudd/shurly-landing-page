<template>
    <div class="navbar-component">
        <v-app-bar
            fixed
            app
            :class='{change_color: scrollPosition > 50}'
            >
            <v-container>
                <v-row class="nav-row align-center" no-gutters>
                    <nuxt-link :to="localePath('/')" class="brand-link">
                    <v-toolbar-title>
                        <img src="../../assets/images/Logo-1.png" alt="Surely logo"/>
                    </v-toolbar-title>
                </nuxt-link>
                <div v-if="$vuetify.breakpoint.mdAndUp && !$vuetify.breakpoint.mdAndDown" class="contOfNav">
                    <!-- About Us -->
                    <nuxt-link aria-label="home" rel="canonical" :to="localePath('/about')" class="link">
                    <v-btn v-ripple="false" aria-label="home" plain class="navTitle">{{ $t('navbar.about') }}</v-btn>
                    <div class="gradiant"></div>
                    </nuxt-link>
                    <!-- Mission & Vision -->
                    <nuxt-link aria-label="about-us" rel="canonical" :to="localePath('/mission-vision')" class="link">
                    <v-btn v-ripple="false" aria-label="aboutus" plain class="navTitle">{{ $t('navbar.missionVision') }}</v-btn>
                    <div class="gradiant"></div>
                    </nuxt-link>
                    <!-- Contact us -->
                    <nuxt-link aria-label="services" rel="canonical" :to="localePath({ path: '/', hash: '#contact' })" class="link">
                    <v-btn v-ripple="false" aria-label="whoWeServe" plain class="navTitle">{{ $t('navbar.contact') }}</v-btn>
                    <div class="gradiant"></div>
                    </nuxt-link>
                </div>
                <v-spacer />
                <div class="nav-actions">
                    <v-btn
                        v-if="!$vuetify.breakpoint.mdAndDown"
                        aria-label="rent"
                        outlined
                        class="rent-btn"
                        :to="localePath('/')"
                    >
                        {{ $t('navbar.getStarted') }}
                    </v-btn>
                    <v-btn
                        aria-label="switch language"
                        outlined
                        class="lang-btn"
                        @click="toggleLocale"
                    >
                        {{ currentLocaleLabel }}
                    </v-btn>
                    <v-menu
                        v-if="$vuetify.breakpoint.mdAndDown"
                        v-model="mobileMenu"
                        offset-y
                        left
                        content-class="mobile-menu-content"
                    >
                        <template #activator="{ on, attrs }">
                        <v-btn
                            aria-label="open navigation menu"
                            outlined
                            small
                            class="menu-btn"
                            v-bind="attrs"
                            v-on="on"
                        >
                            <v-icon small>mdi-menu</v-icon>
                        </v-btn>
                        </template>
                        <v-list dense class="mobile-menu-list">
                            <v-list-item :to="localePath('/about')" @click="mobileMenu = false">
                                <v-list-item-title>{{ $t('navbar.about') }}</v-list-item-title>
                            </v-list-item>
                            <v-list-item :to="localePath('/mission-vision')" @click="mobileMenu = false">
                                <v-list-item-title>{{ $t('navbar.missionVision') }}</v-list-item-title>
                            </v-list-item>
                            <v-list-item :to="localePath({ path: '/', hash: '#contact' })" @click="mobileMenu = false">
                                <v-list-item-title>{{ $t('navbar.contact') }}</v-list-item-title>
                            </v-list-item>
                            <v-list-item :to="localePath('/')" @click="mobileMenu = false">
                                <v-list-item-title>{{ $t('navbar.getStarted') }}</v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-menu>
                </div>
                </v-row>
            </v-container>
        </v-app-bar>
    </div>
</template>
<script>
export default {
    computed: {
        currentLocaleLabel() {
            return this.$i18n.locale === 'en' ? 'AR' : 'EN'
        },
    },
    data() {
        return {
            title: 'Vuetify.js',
            scrollPosition: null,
            mobileMenu: false,
        }
    },
    mounted() {
        window.addEventListener('scroll', this.updateScroll);
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.updateScroll);
    },
    methods: {
        updateScroll() {
            this.scrollPosition = window.scrollY
        },
        toggleLocale() {
            const nextLocale = this.$i18n.locale === 'en' ? 'ar' : 'en'
            this.$i18n.setLocale(nextLocale)
        },
    }
}
</script>
<style lang="scss">
    .navbar-component{
        .v-app-bar{
            background: transparent !important;
            box-shadow: unset !important;
            .v-toolbar__content{
                align-items: center !important;
            }
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
            height: 40px !important;
            &:before{
                background-color: transparent;
            }
        }
        .menu-btn{
            color: #fff !important;
            border-color: #C8F22C !important;
            min-width: 40px !important;
            width: 40px;
            height: 34px !important;
            padding: 0 !important;
            border-radius: 6px;
            display: inline-flex !important;
            align-items: center !important;
            justify-content: center !important;
        }
        .lang-btn{
            color: #fff !important;
            border-color: #C8F22C !important;
            min-width: 56px !important;
            height: 40px !important;
            padding: 0 12px !important;
            letter-spacing: 0;
            font-weight: 700;
        }
        .nav-actions{
            display: flex;
            align-items: center;
            gap: 10px;
        }
        .brand-link{
            display: flex;
            align-items: center;
            text-decoration: none;
        }
        .nav-row{
            min-height: 64px;
            width: 100%;
            align-items: center !important;
        }
        .v-toolbar__title{
            display: flex;
            align-items: center;
            margin: 0;

            img {
                max-width: 156px;
                height: auto;
                display: block;
            }
        }
        @media (max-width: 959px) {
            .v-app-bar{
                background: #0C132F !important;
                height: 72px !important;
            }
            .v-toolbar__content{
                padding: 0 8px !important;
                align-items: center !important;
                min-height: 72px !important;
            }
            .nav-row{
                min-height: 72px;
            }
            .brand-link .v-toolbar__title{
                line-height: 1;
                margin-right: 0;
            }
            .v-toolbar__title img{
                max-width: 120px;
                display: block;
            }
            .lang-btn{
                min-width: 48px !important;
                height: 34px !important;
                padding: 0 10px !important;
            }
            .nav-actions{
                gap: 8px;
            }
        }
    }
    .mobile-menu-content{
        margin-top: 8px;
        border: 1px solid rgba(200, 242, 44, 0.35);
        border-radius: 10px;
        background: #0C132F !important;
    }
    .mobile-menu-list{
        background: #0C132F !important;
        min-width: 220px;
        .v-list-item__title{
            color: #fff;
            font-size: 14px;
            font-weight: 600;
        }
        .v-list-item{
            min-height: 42px;
        }
    }
</style>