<template>
    <div class="jurney-component d-flex align-center">
        <v-container>
            <v-row class="d-flex align-center">
                <v-col md="6" cols="12" class="d-flex justify-center">
                    <img class="ma-auto" src="../../assets/images/fullMobile.svg" alt="fullMobile">
                </v-col>
                <v-col md="6" cols="12">
                    <h2>{{ $t('landing.journey.title') }}</h2>
                    <ul>
                        <li>
                            <img src="../../assets/images/tick.svg" alt="tick">
                            {{ $t('landing.journey.points[0]') }}
                        </li>
                        <li>
                            <img src="../../assets/images/tick.svg" alt="tick">
                            {{ $t('landing.journey.points[1]') }}
                        </li>
                        <li>
                            <img src="../../assets/images/tick.svg" alt="tick">
                            {{ $t('landing.journey.points[2]') }}
                        </li>
                    </ul>
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
        ul{
            list-style: none;
            li{
                color: #fff;
                list-style: unset !important;
                font-size: 20px;
                display: flex;
                align-items: center;
                margin-bottom: 15px;
                img{
                    margin: 0 15px 0 0;
                }
            }
        }
        @media (max-width: 1263px) {
            min-height: auto;
            margin: 90px 0 40px;
            h2{
                font-size: 40px;
            }
            ul li{
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
            ul li{
                font-size: 15px;
                align-items: flex-start;
                img{
                    width: 18px;
                    margin-top: 3px;
                }
            }
        }
    }
</style>