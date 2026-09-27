<template>
  <div class="footer-component">
    <v-footer>
      <v-container>
        <v-row>
          <v-col cols="12" sm="6" md="4">
            <img src="../../assets/images/Logo-1.png" alt="logo">
            <p>
              {{ $t('footer.description') }}
            </p>
          </v-col>
          <v-col cols="6" sm="3" md="2">
            <p>
              <nuxt-link :to="localePath('/about')">
                {{ $t('footer.links.about') }}
              </nuxt-link>
            </p>
            <p>
              <nuxt-link :to="localePath('/')">
                {{ $t('footer.links.career') }}
              </nuxt-link>
            </p>
            <p>
              <nuxt-link :to="localePath('/')">
                {{ $t('footer.links.support') }}
              </nuxt-link>
            </p>
          </v-col>
          <v-col cols="6" sm="3" md="2">
            <!-- <p>
              <nuxt-link :to="localePath('/')">
                {{ $t('footer.links.legal') }}
              </nuxt-link>
            </p> -->
            <p>
              <nuxt-link :to="localePath('/terms-condictions')">
                {{ $t('footer.links.terms') }}
              </nuxt-link>
            </p>
            <p>
              <nuxt-link :to="localePath('/privacy-policy')">
                {{ $t('footer.links.privacy') }}
              </nuxt-link>
            </p>
          </v-col>
          <!-- <v-col cols="6" sm="3" md="2">
                        <p>
                            <nuxt-link :to="localePath('/')">
                            {{ $t('footer.links.twitter') }}
                        </nuxt-link>
                        </p>
                        <p>
                            <nuxt-link :to="localePath('/')">
                            {{ $t('footer.links.instagram') }}
                        </nuxt-link>
                        </p>
                        <p>
                            <nuxt-link :to="localePath('/')">
                            {{ $t('footer.links.linkedin') }}
                        </nuxt-link>
                        </p>
                    </v-col> -->
          <v-col cols="6" sm="3" md="2">
            <p>
              <nuxt-link :to="localePath('/')">
                {{ $t('footer.email') }}
              </nuxt-link>
            </p>
            <p>
              <nuxt-link :to="localePath('/')">
                {{ $t('footer.phone') }}
              </nuxt-link>
            </p>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
    <p class="text-center copyRight w-100">{{ $t('footer.copyright') }}</p>
  </div>
</template>
<script>
export default {
}
</script>
<style lang="scss">
.footer-component {
  .v-footer {
    background: #0C132F !important;
    color: #fff;
    padding: 24px 0 18px;
    position: static !important;

    a {
      color: #fff !important;
      text-decoration: unset !important;
      margin-bottom: 15px !important;
    }

    img {
      max-width: 156px;
      height: auto;
      margin-bottom: 14px;
    }

  }

  .copyRight {
    color: #fff !important;
    z-index: 3;
    position: relative;
  }

  @media (max-width: 959px) {
    .v-footer {
      padding: 16px 0 14px;
    }

    p {
      font-size: 14px;
      margin-bottom: 10px;
    }

    img {
      max-width: 140px;
      margin-bottom: 12px;
    }

    .copyRight {
      font-size: 12px;
      padding: 0 12px 16px;
    }
  }
}
</style>
