<template>
    <div class="about-header-component">
        <div class="overlay">
            <v-container>
                <div class="content w-100">
                <h1>Connect with the best mentors by <span>Shurrly</span></h1>
                <p>
                    Feeling like the credit system is working against you? You're not alone.
                    <br>
                    We're here to guide you in securing the credit you truly deserve.
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
        background: linear-gradient(to bottom, #0C132F 0%, #a3d2607c 100%);
        height: 100vh;
        text-align: center;
        margin-top: 130px;
        position: relative;
    .overlay{
        background: radial-gradient(circle, #0c132f 31%, #a3d26000 100%);
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        margin-top: 130px;
        .content{
            color: #fff;
            h1{
                font-size: 64px;
                font-weight: 600;
                span{
                    color: $second-color;
                }
            }
            p{
                font-size: 24px;
                font-weight: 500;
            }
        }
        .mobile-img{
            // background: linear-gradient(180deg, rgba(12, 19, 47, 0) 0%, #0C132F 100%);
            height: 541px;
        }
    }
            .image{
            height: 185px;
            background: linear-gradient(180deg, rgba(12, 19, 47, 0) 0%, #0C132F 100%);
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100vw;
            right: 0;
            z-index: 3;
        }
    }
</style>