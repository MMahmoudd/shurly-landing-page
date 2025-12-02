<template>
    <div class="header-component">
        <div class="overlay">
            <v-container>
                <div class="content w-100">
                <h1>Kickstart your journey to better credit!</h1>
                <p>
                    Feeling like the credit system is working against you? You're not alone.
                    <br>
                    We're here to guide you in securing the credit you truly deserve.
                </p>
                <v-btn class="mentor-btn" filled>
                    Be a mentor now
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
        height: 100vh;
        text-align: center;
    .overlay{
        background: radial-gradient(circle, #0c132f 31%, #a3d26000 100%);
        height: 100vh;
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
    }
</style>