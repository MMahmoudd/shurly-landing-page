<template>
  <header :class="['figma-navbar', { 'is-home': isHome, 'is-scrolled': isScrolled }]">
    <v-container fluid class="navbar-container">
      <div class="navbar-row">
        <nuxt-link :to="localePath('/')" class="brand">
          <img src="../../assets/images/Logo-1.png" alt="Surely logo">
        </nuxt-link>
        <div class="nav-actions">
          <nav v-if="!$vuetify.breakpoint.mdAndDown" class="menu menu-desktop">
            <nuxt-link
              v-for="(link, i) in navLinks"
              :key="`nav-${i}`"
              :to="localePath(link.to)"
              class="menu-link"
            >
              {{ link.label }}
            </nuxt-link>
          </nav>
          <a
            v-if="!$vuetify.breakpoint.mdAndDown"
            href="#"
            class="menu-link lang-toggle"
            @click.prevent="toggleLocale"
          >
            {{ nextLocaleLabel }}
          </a>
          <v-menu
            v-if="$vuetify.breakpoint.mdAndDown"
            v-model="mobileMenuOpen"
            offset-y
            nudge-bottom="8"
            :left="!isRtl"
            :right="isRtl"
            content-class="figma-navbar-mobile-menu"
            transition="slide-y-transition"
          >
            <template #activator="{ on, attrs }">
              <v-btn
                type="button"
                class="menu-trigger"
                aria-label="Menu"
                small
                outlined
                v-bind="attrs"
                v-on="on"
              >
                <v-icon small>mdi-menu</v-icon>
              </v-btn>
            </template>
            <v-list dense class="figma-navbar-mobile-list">
              <v-list-item
                v-for="(link, i) in navLinks"
                :key="`mnav-${i}`"
                :to="localePath(link.to)"
                @click="mobileMenuOpen = false"
              >
                <v-list-item-title>{{ link.label }}</v-list-item-title>
              </v-list-item>
              <v-list-item @click="onMobileLocale">
                <v-list-item-title>{{ nextLocaleLabel }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
      </div>
    </v-container>
  </header>
</template>

<script>
export default {
  name: 'FigmaNavbar',
  data () {
    return {
      mobileMenuOpen: false,
      isScrolled: false
    }
  },
  computed: {
    t () {
      return this.$i18n.messages[this.$i18n.locale].figmaLanding
    },
    navLinks () {
      return [
        { to: '/', label: this.t.nav.home },
        { to: '/about', label: this.t.nav.about },
        { to: '/mission-vision', label: this.t.nav.missionVision }
      ]
    },
    nextLocale () {
      return this.$i18n.locale === 'en' ? 'ar' : 'en'
    },
    nextLocaleLabel () {
      return this.$i18n.messages[this.$i18n.locale].common.language[this.nextLocale]
    },
    isHome () {
      const normalize = (path) => {
        const cleaned = (path || '').replace(/\/+$/, '')
        return cleaned || '/'
      }

      return normalize(this.$route.path) === normalize(this.localePath('/'))
    },
    isRtl () {
      return this.$i18n.localeProperties?.dir === 'rtl'
    }
  },
  mounted () {
    this.onScroll()
    window.addEventListener('scroll', this.onScroll, { passive: true })
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll () {
      this.isScrolled = window.scrollY > 8
    },
    toggleLocale () {
      this.$router.push(this.switchLocalePath(this.nextLocale))
    },
    onMobileLocale () {
      this.mobileMenuOpen = false
      this.toggleLocale()
    }
  }
}
</script>

<style lang="scss" scoped>
$brand-navy: #0f1b4d;
$brand-teal: #27bdbe;
$brand-lime: #c8f22c;

.figma-navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  padding: 16px 18px 12px;
  background: transparent;
  pointer-events: none;
  transition: padding 0.2s ease;

  .navbar-container {
    pointer-events: auto;
    position: relative;
    max-width: 1240px;
    margin: 0 auto;
    border-radius: 16px;
    padding: 10px 20px;
    background: #fff;
    box-shadow: 0 8px 32px rgba(15, 27, 77, 0.08);
    border: 1px solid rgba(39, 189, 190, 0.14);
    overflow: hidden;
    transition: box-shadow 0.2s ease;

    &::after {
      content: '';
      position: absolute;
      inset-inline: 0;
      bottom: 0;
      height: 3px;
      background: linear-gradient(90deg, $brand-lime 0%, $brand-teal 100%);
    }
  }

  .menu-link {
    color: $brand-navy;

    &:hover {
      color: $brand-teal;
    }

    &.nuxt-link-exact-active {
      color: $brand-teal;
      font-weight: 600;
    }
  }

  &.is-scrolled {
    padding: 10px 18px 8px;

    .navbar-container {
      box-shadow: 0 10px 36px rgba(15, 27, 77, 0.14);
    }
  }

  &.is-home:not(.is-scrolled) {
    @media (max-width: 959px) {
      .navbar-container {
        background: rgba(255, 255, 255, 0.94);
        backdrop-filter: blur(12px);
        box-shadow: 0 6px 24px rgba(8, 19, 54, 0.12);
      }
    }
  }
}

.navbar-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 52px;
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 14px;
}

.brand {
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  line-height: 0;

  img {
    width: 148px;
    height: auto;
    display: block;
  }
}

.menu {
  display: flex;
  gap: 28px;
}

.menu-link {
  color: $brand-navy;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  transition: color 0.2s ease;
}

.lang-toggle {
  padding: 7px 14px;
  border-radius: 10px;
  border: 1.5px solid $brand-teal;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s ease, color 0.2s ease;

  &:hover {
    background: rgba(39, 189, 190, 0.1);
    color: $brand-teal;
  }
}

.menu-trigger {
  min-width: 40px !important;
  width: 40px;
  height: 40px !important;
  padding: 0 !important;
  border-radius: 10px !important;
  border: 1.5px solid $brand-teal !important;
  color: $brand-navy !important;
  background: #fff !important;

  &:hover {
    background: rgba(200, 242, 44, 0.18) !important;
    border-color: $brand-lime !important;
  }
}

@media (max-width: 959px) {
  .figma-navbar {
    padding: calc(10px + env(safe-area-inset-top, 0px)) 12px 8px;

    &.is-scrolled {
      padding: calc(8px + env(safe-area-inset-top, 0px)) 12px 6px;
    }

    .navbar-container {
      max-width: 100%;
      padding: 6px 12px;
      border-radius: 12px;
    }
  }

  .navbar-row {
    min-height: 44px;
    gap: 10px;
  }

  .brand {
    flex: 1;
    min-width: 0;

    img {
      width: auto;
      max-width: 118px;
      max-height: 34px;
      object-fit: contain;
      object-position: start center;
    }
  }

  .nav-actions {
    flex-shrink: 0;
    gap: 0;
  }

  .menu-trigger {
    min-width: 38px !important;
    width: 38px;
    height: 38px !important;
    border-radius: 9px !important;
  }
}

[dir="rtl"] .brand img {
  object-position: end center;
}

@media (max-width: 399px) {
  .figma-navbar .navbar-container {
    padding: 6px 10px;
  }

  .brand img {
    max-width: 104px;
    max-height: 30px;
  }
}
</style>

<style lang="scss">
.figma-navbar-mobile-menu.v-menu__content {
  border-radius: 14px;
  border: 1px solid rgba(39, 189, 190, 0.16);
  box-shadow: 0 16px 40px rgba(15, 27, 77, 0.14);
  overflow: hidden;
  margin-top: 4px !important;
}

.figma-navbar-mobile-list {
  padding: 6px 0;
  min-width: min(280px, calc(100vw - 24px));

  .v-list-item {
    min-height: 44px;

    &:hover {
      background: rgba(39, 189, 190, 0.08);
    }
  }

  .v-list-item--active {
    background: rgba(200, 242, 44, 0.14);

    .v-list-item__title {
      color: #27bdbe;
      font-weight: 600;
    }
  }

  .v-list-item__title {
    font-size: 15px;
    font-weight: 500;
    color: #0f1b4d;
  }
}
</style>
