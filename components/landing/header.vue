<template>
    <div class="header-component">
        <div class="overlay">
            <v-container>
                <div class="content w-100">
                <h1>{{ $t('landing.header.title') }}</h1>
                <p>
                    {{ $t('landing.header.descriptionLine1') }}
                    <br>
                    {{ $t('landing.header.descriptionLine2') }}
                </p>
                <v-btn class="mentor-btn" filled>
                    {{ $t('landing.header.mentorButton') }}
                </v-btn>
                <div class="download-btns d-flex justify-space-around">
                    <img src="../../assets/images/google.svg" alt="google button">
                    <img src="../../assets/images/apple.svg" alt="Apple button">
                </div>
            </div>
            <img class="mobile-img" src="../../assets/images/mobile.svg" alt="mobile">
            <div class="logos">
                <v-row>
                    <v-col md="3">
                        <img src="../../assets/images/vector1.svg" alt="vector">
                    </v-col>
                    <v-col md="3">
                        <img src="../../assets/images/vector2.svg" alt="vector">
                    </v-col>
                    <v-col md="3">
                        <img src="../../assets/images/vector3.svg" alt="vector">
                    </v-col>
                    <v-col md="3">
                        <img src="../../assets/images/vector4.svg" alt="vector">
                    </v-col>
                </v-row>
            </div>
            </v-container>
        </div>
    </div>
</template>
<style lang="scss">
    .header-component{
        background: linear-gradient(to bottom, #0C132F 0%, #a3d2607c 100%);
        min-height: 100vh;
        text-align: center;
    .overlay{
        background: radial-gradient(circle, #0c132f 31%, #a3d26000 100%);
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        .content{
            color: #fff;
            h1{
                font-size: 64px;
                font-weight: 600;
            }
            p{
                font-size: 24px;
                font-weight: 500;
            }
            .mentor-btn{
                background-color: $second-color;
                width: 270px !important;
                height: 52px !important;
                border-radius: 16px;
                font-size: 20px;
                font-family: "Poppins", serif !important;
                margin-bottom: 130px;
            }
            // .download-btns{
            //     margin-top: 50px;
            // }
        }
        .mobile-img{
            width: 200px;
            position: absolute;
            bottom: 0;
            left: 43%;
            margin: auto;
            z-index: 3;
        }
        .logos{
            width: 85%;
            background: #0C132F;
            padding: 25px;
            position: absolute;
            bottom: -65px;
            left: 7.5%;
            z-index: 4;
            border: 3px solid $main-color;
            border-radius: 24px;
            .row{
                align-items: center;
            }
            img{
                max-height: 66px;
            }
        }
    }
    @media (max-width: 1263px) {
        .overlay{
            padding: 130px 0 120px;
            .content{
                h1{
                    font-size: 48px;
                }
                p{
                    font-size: 20px;
                }
                .mentor-btn{
                    margin-bottom: 70px;
                }
            }
            .mobile-img{
                width: 170px;
                left: calc(50% - 85px);
            }
            .logos{
                bottom: -80px;
                padding: 20px 14px;
            }
        }
    }
    @media (max-width: 959px) {
        min-height: auto;
        .overlay{
            min-height: auto;
            align-items: flex-start;
            padding: 98px 0 40px;
            .content{
                max-width: 360px;
                margin: 0 auto;
                h1{
                    font-size: 38px;
                    line-height: 1.2;
                    margin-bottom: 14px;
                }
                p{
                    font-size: 16px;
                    line-height: 1.6;
                    margin-bottom: 20px;
                }
                .mentor-btn{
                    width: 220px !important;
                    height: 46px !important;
                    font-size: 16px;
                    margin-bottom: 20px;
                }
            }
            .download-btns{
                display: flex;
                flex-direction: column;
                gap: 12px;
                align-items: center;
                img{
                    max-width: 155px;
                }
            }
            .mobile-img{
                display: none;
            }
            .logos{
                display: none;
            }
        }
    }
    }
</style>