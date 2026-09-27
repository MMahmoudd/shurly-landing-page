<template>
    <div class="jurney-component d-flex align-center">
        <v-container>
            <v-row class="d-flex align-center">
                <v-col md="6" cols="12">
                    <h2>{{ $t('landing.third.title') }}</h2>
                    <p>
                        {{ $t('landing.third.description') }}
                    </p>
                </v-col>
                <v-col md="6" cols="12" class="d-flex justify-center">
                    <img class="ma-auto" src="../../assets/images/rightPhone.svg" alt="fullMobile">
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
<style lang="scss">
    .jurney-component{
        min-height: 100vh;
        margin: 50px 0;
        h2{
            color: #fff;
            font-size: 48px;
            margin-bottom: 15px;
        }
            p{
                color: #fff;
                list-style: unset !important;
                font-size: 20px;
                display: flex;
                align-items: center;
                margin-bottom: 15px;
            }
        @media (max-width: 1263px) {
            min-height: auto;
            margin: 60px 0 40px;
            h2{
                font-size: 40px;
            }
            p{
                font-size: 18px;
            }
            img{
                max-width: 100%;
            }
        }
        @media (max-width: 959px) {
            margin: 40px 0;
            h2{
                font-size: 30px;
            }
            p{
                font-size: 16px;
            }
        }
    }
</style>