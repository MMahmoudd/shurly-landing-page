<template>
    <div class="about-header-component">
        <div class="overlay">
            <v-container>
                <div class="content w-100">
                <h1>
                    <span class="brand-name" dir="ltr">Surely</span>
                    <span class="headline-sep"> — </span>
                    {{ $t('missionVision.header.headline') }}
                </h1>
                <p>
                    {{ $t('missionVision.header.descriptionLine1') }}
                    <br>
                    {{ $t('missionVision.header.descriptionLine2') }}
                </p>
            </div>
                <img class="mobile-img" src="../../assets/images/3mobile-screen.svg" alt="mobile">
            </v-container>

        </div>
        <div class="w-100 image">

        </div>
    </div>
</template>
<style lang="scss">
    .about-header-component{
        background:
          radial-gradient(circle at 15% 18%, rgba(17, 184, 192, 0.18) 0%, rgba(17, 184, 192, 0) 44%),
          radial-gradient(circle at 85% 70%, rgba(161, 241, 126, 0.16) 0%, rgba(161, 241, 126, 0) 48%),
          linear-gradient(160deg, #081336 0%, #10255d 58%, #0b173f 100%);
        min-height: 100vh;
        text-align: center;
        margin-top: 0;
        position: relative;
        overflow: hidden;
    .overlay{
        background: linear-gradient(180deg, rgba(8, 19, 54, 0.08) 0%, rgba(8, 19, 54, 0.52) 100%);
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        margin-top: 0;
        padding: 76px 0 20px;
        .content{
            color: #fff;
            max-width: 980px;
            margin: 0 auto;
            h1{
                font-size: 66px;
                font-weight: 700;
                line-height: 1.18;
                margin-bottom: 18px;
                span{
                    color: #c8f22c;
                }
                .brand-name{
                    display: inline-block;
                    margin-inline-start: 10px;
                }
            }
            p{
                font-size: 28px;
                font-weight: 500;
                line-height: 1.55;
                color: #deebff;
                margin: 0;
            }
        }
        .mobile-img{
            height: 520px;
            width: auto;
            max-width: 100%;
            margin-top: 18px;
            filter: drop-shadow(0 20px 40px rgba(0, 0, 0, 0.35));
        }
    }
            .image{
            height: 185px;
            background: linear-gradient(180deg, rgba(8, 19, 54, 0) 0%, #081336 100%);
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            right: 0;
            z-index: 3;
        }
        @media (max-width: 1263px) {
            margin-top: 0;
            .overlay{
                margin-top: 0;
                padding: 48px 0 0;
                .content{
                    h1{
                        font-size: 52px;
                    }
                    p{
                        font-size: 22px;
                    }
                }
                .mobile-img{
                    height: 430px;
                    width: auto;
                    max-width: 100%;
                }
            }
        }
        @media (max-width: 959px) {
            margin-top: 0;
            min-height: auto;
            .overlay{
                margin-top: 0;
                min-height: auto;
                padding: 30px 0 0;
                .content{
                    max-width: 360px;
                    margin: 0 auto;
                    h1{
                        font-size: 36px;
                        line-height: 1.25;
                        margin-bottom: 10px;
                    }
                    p{
                        font-size: 16px;
                        line-height: 1.7;
                    }
                }
                .mobile-img{
                    height: auto;
                    max-height: 330px;
                    width: 100%;
                    max-width: 360px;
                    margin-top: 12px;
                }
            }
            .image{
                height: 96px;
            }
        }
    }

    [dir="rtl"] .about-header-component{
        .overlay .content h1 .brand-name{
            margin-inline-start: 0;
            margin-inline-end: 10px;
        }
        .overlay .content h1 .headline-sep{
            margin-inline: 6px;
        }
    }
</style>