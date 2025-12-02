<template>
    <div class="content-component">
        <!-- <v-container> -->
            <div class="mission">
                <v-container>
                                <v-row>
                <v-col md="6">
                    <h4 class="title">
                        Mission
                    </h4>
                </v-col>
                <v-col md="6">
                    <p>
                        Our mission is to connect aspiring professionals with top industry mentors to help them achieve their career goals.
                    </p>
                </v-col>
            </v-row>
                </v-container>
            </div>
            <div class="mission">
                <v-container>
                                <v-row>
                <v-col md="6">
                    <h4 class="title">
                        Vision
                    </h4>
                    
                </v-col>
                <v-col md="6">
                    <p>
                        Our vision is to create a world where everyone has access to the guidance they need to succeed.
                    </p>
                </v-col>
            </v-row>
                </v-container>
            </div>
            <div>
                <v-container>
                                <v-row>
                <v-col md="6">
                    <p class="last">
                        MentorApp was founded in 2022 with the goal of making professional mentorship accessible to everyone. Our team is dedicated to providing the best platform for connecting with industry experts.
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
        color: #D6DDE6;
        padding: 150px 0 50px 0;
        .mission{
            padding: 100px 0;
            border-bottom:  1.5px solid #FFFFFF33;
            display: flex;
            align-items: center;
            .title{
                font-size: 48px !important;
                font-weight: 700 !important;
            }
            p{
                font-size: 24px !important;
                font-weight: 500 !important;
            }
        }
        .last{
            padding: 50px 0;
            font-size: 40px !important;
            font-weight: 500 !important;
        }
    }
</style>