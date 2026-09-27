<template>
  <section class="love">
    <v-container>
      <div class="section-head">
        <h2>{{ t.love.title }}</h2>
        <p>{{ t.love.subtitle }}</p>
      </div>
      <v-row>
        <v-col cols="12" md="4" v-for="(card, i) in t.love.cards" :key="`love-${i}`">
          <div class="card">
            <img :src="icons[card.icon]" :alt="card.icon" class="card-icon">
            <h3>{{ card.title }}</h3>
            <p>{{ card.text }}</p>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import alarmIcon from '../../assets/images/new-landing/alarm.svg'
import fireIcon from '../../assets/images/new-landing/fire.svg'
import statsIcon from '../../assets/images/new-landing/stats.svg'
export default {
  name: 'FigmaShowcaseLoveSection',
  data() {
    return {
      icons: {
        alarm: alarmIcon,
        fire: fireIcon,
        stats: statsIcon,
      }
    }
  },
  computed: {
    t() {
      return this.$i18n.messages[this.$i18n.locale].figmaLanding
    }
  }
}
</script>

<style lang="scss" scoped>
.love {
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

.card {
  background: #f9f9f9;
  border-radius: 20px;
  min-height: 220px;
  padding: 30px 24px;
  border: 1px solid #ececf2;

  .card-icon {
    width: 24px;
    height: 24px;
    margin-bottom: 16px;
  }

  h3 {
    font-size: 24px;
    margin-bottom: 16px;
  }

  p {
    color: #606882;
    margin: 0;
    line-height: 1.7;
  }
}

@media (max-width: 959px) {
  .love {
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
