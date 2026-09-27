<template>
    <div class="downloadApp-component">
        <v-container>
            <h1>
                {{ $t('landing.download.title') }}
            </h1>
            <div class="download-actions d-flex justify-center">
                <img src="../../assets/images/l-apple-btn.svg" alt="apple" class="mx-3">
                <img src="../../assets/images/l-google-btn.svg" alt="google" class="mx-3">
            </div>
        </v-container>
    </div>
</template>

<style lang="scss">
    .downloadApp-component{
        padding: 50px 0;
        background: linear-gradient(180deg, rgba(12, 19, 47, 0.7) 6.1%, rgba(163, 210, 96, 0.42) 124.1%);
        min-height: 500px;
        text-align: center;
        h1{
            margin: 0 0 20px;
            color: $second-color;
            font-weight: 600;
            font-size: 64px;
            padding: 0 80px;
        }
        .download-actions{
            margin-top: 6px;
        }
        @media (max-width: 1263px) {
            min-height: 420px;
            h1{
                font-size: 46px;
                padding: 0 40px;
            }
            img{
                max-width: 180px;
            }
        }
        @media (max-width: 959px) {
            min-height: 360px;
            padding: 36px 0 56px;
            h1{
                margin-top: 0;
                font-size: 36px;
                line-height: 1.3;
                margin-bottom: 14px;
                padding: 0;
            }
            .download-actions{
                flex-direction: column;
                gap: 10px;
                align-items: center;
                margin-top: 2px;
                margin-bottom: 16px;
            }
            img{
                max-width: 165px;
                margin: 0 !important;
            }
        }
        @media (max-width: 600px) {
            min-height: 340px;
            h1{
                font-size: 32px;
            }
        }
    }
</style>