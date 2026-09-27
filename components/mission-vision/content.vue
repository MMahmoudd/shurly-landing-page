<template>
    <div class="content-component">
        <!-- <v-container> -->
            <div class="mission">
                <v-container>
                                <v-row>
                <v-col cols="12" md="6">
                    <h4 class="title">
                        {{ $t('missionVision.content.missionTitle') }}
                    </h4>
                </v-col>
                <v-col cols="12" md="6">
                    <p>
                        {{ $t('missionVision.content.missionP1') }}
                    </p>
                    <p>
                        {{ $t('missionVision.content.missionP2') }}
                    </p>
                </v-col>
            </v-row>
                </v-container>
            </div>
            <div class="mission">
                <v-container>
                                <v-row>
                <v-col cols="12" md="6">
                    <h4 class="title">
                        {{ $t('missionVision.content.visionTitle') }}
                    </h4>
                    
                </v-col>
                <v-col cols="12" md="6">
                    <p>
                        {{ $t('missionVision.content.visionP1') }}
                    </p>
                    <p>
                        {{ $t('missionVision.content.visionP2') }}
                    </p>
                </v-col>
            </v-row>
                </v-container>
            </div>
            <div>
                <v-container>
                                <v-row>
                <v-col cols="12" md="7">
                    <p class="last">
                        {{ $t('missionVision.content.last') }}
                    </p>
                </v-col>
            </v-row>
                </v-container>
            </div>
        <!-- </v-container> -->
    </div>
</template>

<style lang="scss">
    .content-component{
        color: #4b556f;
        padding: 150px 0 50px 0;
        .mission{
            padding: 100px 0;
            border-bottom:  1.5px solid rgba(16, 20, 42, 0.12);
            display: flex;
            align-items: center;
            .title{
                color: #10142a;
                font-size: 48px !important;
                font-weight: 700 !important;
            }
            p{
                color: #4b556f;
                font-size: 24px !important;
                font-weight: 500 !important;
            }
            p + p {
                margin-top: 16px;
            }
        }
        .last{
            color: #10142a;
            padding: 50px 0;
            font-size: 40px !important;
            font-weight: 500 !important;
        }
        @media (max-width: 1263px) {
            padding-top: 120px;
            .mission{
                padding: 70px 0;
                .title{
                    font-size: 40px !important;
                }
                p{
                    font-size: 20px !important;
                }
            }
            .last{
                font-size: 30px !important;
            }
        }
        @media (max-width: 959px) {
            padding: 52px 0 30px;
            .mission{
                padding: 34px 0;
                .title{
                    font-size: 30px !important;
                    margin-bottom: 12px;
                }
                p{
                    font-size: 16px !important;
                    line-height: 1.6;
                }
            }
            .last{
                padding: 30px 0;
                font-size: 22px !important;
                line-height: 1.5;
            }
        }
    }
</style>