<template>
    <div class="main-about-component">
        <v-container>
            <v-row class="about-intro">
                <v-col cols="12" md="8">
                    <h1>
                        {{ $t('about.title') }}
                    </h1>
                    <p class="about-tagline">
                        {{ $t('about.tagline') }}
                    </p>
                    <p>
                        {{ $t('about.intro.p1') }}
                    </p>
                    <p>
                        {{ $t('about.intro.p2') }}
                    </p>
                    <p>
                        {{ $t('about.intro.p3') }}
                    </p>
                    <p>
                        <span>{{ $t('about.contact.email') }}</span>
                        <br>
                        <span>{{ $t('about.contact.phone') }}</span>
                    </p>
                </v-col>
                <v-col cols="12" md="4" class="about-image-col">
                    <img src="../../assets/images/aboutus-img.svg" alt="" class="about-image">
                </v-col>
            </v-row>

            <section class="about-section">
                <h2>{{ $t('about.whyExists.title') }}</h2>
                <p>{{ $t('about.whyExists.p1') }}</p>
                <p>{{ $t('about.whyExists.p2') }}</p>
            </section>

            <section class="about-section">
                <h2>{{ $t('about.whatWeDo.title') }}</h2>
                <p>{{ $t('about.whatWeDo.p1') }}</p>
                <p>{{ $t('about.whatWeDo.p2') }}</p>
                <p>{{ $t('about.whatWeDo.p3') }}</p>
            </section>

            <section class="about-section">
                <h2>{{ $t('about.founder.title') }}</h2>
                <p>{{ $t('about.founder.p1') }}</p>
                <p>{{ $t('about.founder.p2') }}</p>
                <p>{{ $t('about.founder.p3') }}</p>
            </section>

            <section class="about-section about-different">
                <h2>{{ $t('about.different.title') }}</h2>
                <div
                    v-for="(item, index) in differentItems"
                    :key="'diff-' + index"
                    class="different-item"
                >
                    <h3>{{ item.title }}</h3>
                    <p>{{ item.body }}</p>
                </div>
            </section>

            <section class="about-section">
                <h2>{{ $t('about.builtFor.title') }}</h2>
                <p>{{ $t('about.builtFor.users') }}</p>
                <p>{{ $t('about.builtFor.advisors') }}</p>
                <p>{{ $t('about.builtFor.closing') }}</p>
            </section>

            <section class="about-section about-promise">
                <h2>{{ $t('about.promise.title') }}</h2>
                <p>{{ $t('about.promise.p1') }}</p>
                <p>{{ $t('about.promise.p2') }}</p>
                <p class="promise-tagline">{{ $t('about.promise.tagline') }}</p>
            </section>
        </v-container>
    </div>
</template>

<script>
export default {
    name: 'AboutComponent',
    computed: {
        differentItems () {
            const locale = this.$i18n.locale
            const messages = this.$i18n.messages[locale]
            return messages.about.different.items
        }
    }
}
</script>

<style lang="scss">
    .main-about-component{
        margin: 40px 0 50px 0;
        .about-image-col{
            display: flex;
            justify-content: center;
            align-items: flex-start;
        }
        .about-image{
            width: 100%;
            max-width: 380px;
        }
        h1{
            color: #10142a;
            font-size: 64px;
            font-weight: 700;
            margin-bottom: 16px;
        }
        .about-tagline{
            color: #0f1b4d;
            font-size: 28px;
            font-weight: 600;
            margin-bottom: 28px !important;
        }
        p{
            color: #4b556f;
            font-size: 24px;
            font-weight: 500;
            margin: 0 50px 25px 0;
            span{
                margin-top: 20px;
                color: #0f1b4d;
                font-size: 34px;
            }
        }
        .about-section{
            margin-top: 48px;
            padding-top: 40px;
            border-top: 1.5px solid rgba(16, 20, 42, 0.12);
            h2{
                color: #10142a;
                font-size: 28px;
                font-weight: 700;
                margin-bottom: 20px;
            }
            h3{
                color: #10142a;
                font-size: 22px;
                font-weight: 700;
                margin: 24px 0 10px;
            }
            p{
                margin-right: 0;
                margin-bottom: 16px;
                font-size: 20px;
            }
        }
        .different-item:first-of-type h3{
            margin-top: 0;
        }
        .about-promise .promise-tagline{
            color: #10142a;
            font-size: 24px;
            font-weight: 600;
            margin-top: 8px;
        }
        @media (max-width: 1263px) {
            h1{
                font-size: 52px;
            }
            .about-tagline{
                font-size: 24px;
            }
            p{
                font-size: 20px;
                margin-right: 20px;
            }
            img{
                width: 100%;
                max-width: 360px;
            }
            .about-section p{
                font-size: 18px;
            }
        }
        @media (max-width: 959px) {
            margin: 24px 0 24px;
            .about-intro{
                flex-direction: column-reverse;
            }
            .about-image{
                max-width: 220px;
                margin-bottom: 20px;
            }
            h1{
                font-size: 36px;
                margin-bottom: 12px;
            }
            .about-tagline{
                font-size: 18px;
                margin-bottom: 18px !important;
            }
            p{
                font-size: 16px;
                margin: 0 0 14px;
                span{
                    font-size: 24px;
                }
            }
            .about-section{
                margin-top: 28px;
                padding-top: 28px;
                h2{
                    font-size: 24px;
                }
                h3{
                    font-size: 18px;
                }
                p{
                    font-size: 16px;
                }
            }
            .about-promise .promise-tagline{
                font-size: 18px;
            }
        }
    }
</style>
