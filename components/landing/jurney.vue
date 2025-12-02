<template>
    <div class="jurney-component d-flex align-center">
        <v-container>
            <v-row class="d-flex align-center">
                <v-col md="6" cols="12" class="d-flex justify-center">
                    <img class="ma-auto" src="../../assets/images/fullMobile.svg" alt="fullMobile">
                </v-col>
                <v-col md="6" cols="12">
                    <h2>Kickstart your journey to better credit!</h2>
                    <ul>
                        <li>
                            <img src="../../assets/images/tick.svg" alt="tick">
                            Get a bonus of $250 right now!
                        </li>
                        <li>
                            <img src="../../assets/images/tick.svg" alt="tick">
                            Enjoy zero interest, no late fees, and no credit checks!
                        </li>
                        <li>
                            <img src="../../assets/images/tick.svg" alt="tick">
                            Quick and easy delivery at your fingertips!
                        </li>
                    </ul>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
<style lang="scss">
    .jurney-component{
        height: 100vh;
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
    }
</style>