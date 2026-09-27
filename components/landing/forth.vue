<template>
    <div class="forth-component d-flex align-center">
        <v-container>
            <v-row class="d-flex align-center">
                <v-col md="6" cols="12" class="d-flex justify-center">
                    <img class="preview-img ma-auto" src="../../assets/images/fullMobile.svg" alt="fullMobile">
                </v-col>
                <v-col md="6" cols="12">
                    <h2>{{ $t('landing.forth.title') }}</h2>
                    <p>
                        {{ $t('landing.forth.description') }}
                    </p>
                    <v-row>
                        <v-col cols="12" sm="6" md="6" >
                            <div class="box text-center">
                                <h3>12+</h3>
                                <p>
                                    {{ $t('landing.forth.stats.years') }}
                                </p>
                            </div>
                        </v-col>
                        <v-col cols="12" sm="6" md="6" >
                            <div class="box text-center">
                                <h3>90%</h3>
                                <p>
                                    {{ $t('landing.forth.stats.dedicated') }}
                                </p>
                            </div>
                        </v-col>
                                                <v-col cols="12" sm="6" md="6" >
                            <div class="box text-center">
                                <h3>10M</h3>
                                <p>
                                    {{ $t('landing.forth.stats.engaged') }}
                                </p>
                            </div>
                        </v-col>
                                                <v-col cols="12" sm="6" md="6" >
                            <div class="box text-center">
                                <h3>250M</h3>
                                <p>
                                    {{ $t('landing.forth.stats.sessions') }}
                                </p>
                            </div>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
<style lang="scss">
    .forth-component{
        min-height: 100vh;
        margin: 50px 0;
        h2{
            color: #fff;
            font-size: 46px;
            margin-bottom: 15px;
            font-weight: 600;
        }
            p{
                color: #fff;
                font-size: 20px;
                margin-bottom: 15px;
            }
            .box{
                border: 1px solid $second-color;
                color: $second-color;
                border-radius: 16px;
                padding: 16px 33px;
                height: 174px;
                h3{
                    font-size: 48px;
                    font-weight: 700;
                }
                p{
                    color: $second-color;
                    font-size: 18px;
                    font-weight: 500;
                }
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
            .preview-img{
                max-width: 100%;
            }
            .box{
                height: 100%;
                min-height: 150px;
                h3{
                    font-size: 40px;
                }
            }
        }
        @media (max-width: 959px) {
            margin: 40px 0;
            .preview-img{
                max-width: 240px;
                margin-bottom: 10px;
            }
            h2{
                font-size: 34px;
                line-height: 1.25;
            }
            p{
                font-size: 16px;
                line-height: 1.6;
            }
            .box{
                padding: 16px;
                min-height: 118px;
                height: auto;
                h3{
                    font-size: 38px;
                    line-height: 1;
                }
                p{
                    font-size: 14px;
                    margin-bottom: 0;
                }
            }
        }
        @media (max-width: 600px) {
            .preview-img{
                display: none;
            }
            h2{
                font-size: 32px;
                margin-bottom: 10px;
            }
            p{
                font-size: 14px;
                margin-bottom: 10px;
            }
        }
    }
</style>