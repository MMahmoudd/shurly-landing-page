<template>
  <section class="testimonials">
    <v-container>
      <div class="section-head">
        <h2>{{ t.testimonials.title }}</h2>
        <p>{{ t.testimonials.subtitle }}</p>
      </div>
      <v-row>
        <v-col cols="12" md="4" v-for="(item, i) in t.testimonials.items" :key="`review-${i}`">
          <div class="review-card">
            <h4>{{ item.name }}</h4>
            <small>{{ item.role }}</small>
            <p>{{ item.quote }}</p>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  name: 'FigmaShowcaseTestimonialsSection',
  computed: {
    t () {
      return this.$i18n.messages[this.$i18n.locale].figmaLanding
    }
  }
}
</script>

<style lang="scss" scoped>
.testimonials {
  padding: 90px 0 10px;
}

.section-head {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 20px;
  margin-bottom: 34px;

  h2 {
    font-size: 46px;
    line-height: 1.2;
    margin: 0;
  }

  p {
    margin: 0;
    font-size: 18px;
    color: #59607a;
  }
}

.review-card {
  border-radius: 18px;
  background: #fff;
  border: 1px solid #ececf2;
  min-height: 210px;
  padding: 22px;

  h4 {
    font-size: 20px;
    margin-bottom: 2px;
  }

  small {
    color: #79809a;
    display: block;
    margin-bottom: 16px;
  }

  p {
    color: #606882;
    line-height: 1.7;
    margin: 0;
  }
}

@media (max-width: 959px) {
  .testimonials {
    padding: 44px 0 6px;
  }

  .section-head {
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 22px;

    h2 {
      font-size: 30px;
    }

    p {
      font-size: 15px;
    }
  }
}
</style>
