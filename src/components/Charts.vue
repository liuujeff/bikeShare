<template>
    <v-container fluid>
        <v-layout row wrap>
            <v-flex xs12 sm12 md12 lg12>
                <div class="display-3">
                    Dashboard <span class="headline"> data is from Q3 2018 </span>
                </div>
            </v-flex>
            <v-flex xs12 sm12 md6 lg4 pa-4>
                <v-card class="elevation-5">
                    <distance class="pt-4 px-3"/>
                    <v-card-title primary-title>
                        <div class="headline pl-3">Distance Traveled</div>
                        <v-spacer />
                        <v-btn icon @click="showDistance = !showDistance" pr-3>
                            <v-icon>{{ showDistance ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
                        </v-btn>
                    </v-card-title>
                    <v-slide-y-transition>
                        <v-card-text v-show="showDistance" class="mx-2">
                            We can see most riders bike for less than 300 m (about .2 mi). Summing the data in given chart,
                            and calculating the average, we see that the <b>average user travels about 950 meters</b>. If the average user
                            travels about 950 meters and most users spend less than 15 minutes, we can calculate the average speed to be about 4 km/hr,
                            which isn't too unreasonable for bike speeds, considering the <b>distance is measured from the start to end
                            geocoordinate without considering the path taken</b>.
                        </v-card-text>
                    </v-slide-y-transition>
                </v-card>
            </v-flex>
            <v-flex xs12 sm12 md6 lg4 pa-4>
                <v-card class="elevation-5">
                    <popular class="pt-4 px-3"/>
                    <v-card-title primary-title>
                        <div class="headline pl-3">Most Popular Start Stations</div>
                        <v-spacer />
                        <v-btn icon @click="showPopular = !showPopular" pr-3>
                            <v-icon>{{ showPopular ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
                        </v-btn>
                    </v-card-title>
                    <v-slide-y-transition>
                        <v-card-text v-show="showPopular">
                            The graph displays the 10 most popular start stations, and we can clearly see that station <b>4214</b>
                            is the most popular. Ocean Front Walk and Navy is located in Venice along the beaches of Los Angeles with
                            a 8.5 mile bike path.
                            We can imagine that the popular tourist spot is filled with young adults hanging around and enjoying
                            a bike ride along the ocean's breeze.
                            The runner up station is 4210, Ocean Front Walk and North Venice, also another station in by Venice beach.
                        </v-card-text>
                    </v-slide-y-transition>
                </v-card>
            </v-flex>
            <v-flex xs12 sm12 md6 lg4 pa-4>
                <v-card class="elevation-5">
                    <duration class="pt-4 px-3"/>
                    <v-card-title primary-title>
                        <div class="headline pl-3">Time Spent</div>
                        <v-spacer />
                        <v-btn icon @click="showTime = !showTime" pr-3>
                            <v-icon>{{ showTime ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
                        </v-btn>
                    </v-card-title>
                    <v-slide-y-transition>
                        <v-card-text v-show="showTime" class="mx-2">
                            Most users spent less than <b>15 minutes</b> using this service, this relates to how most users only
                            travel less than 300 meters. Following that up, the 15-30 minute range makes up another portion
                            of the data, suggesting that these users travel about a kilometer or so.
                        </v-card-text>
                    </v-slide-y-transition>
                </v-card>
            </v-flex>
            <v-flex xs12 sm12 md6 lg4 pa-4>
                <v-card class="elevation-5">
                    <plan class="pt-4 px-3"/>
                    <v-card-title primary-title>
                        <div class="headline pl-3">Type of Plan</div>
                        <v-spacer />
                        <v-btn icon @click="showPlan = !showPlan" pr-3>
                            <v-icon>{{ showPlan ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
                        </v-btn>
                    </v-card-title>
                    <v-slide-y-transition>
                        <v-card-text v-show="showPlan" class="mx-2">
                            Looking at this pie chart, it is evident that over half the riders have some kind of pass,
                            including the one day, flex or monthly. Most noticeably, almost half of the riders have a <b>monthly
                            pass</b> which means they utilize bike sharing daily. This could be their main way of getting around the city
                            or their method for their daily commutes. Additionally, buying a monthly pass helps users <b>save money</b>
                            over a period of time since they use this service frequently. Secondly, we have that walk up users make up
                            almost hlaf the users. These could be tourist looking to explore the city or people trying the service out.
                        </v-card-text>
                    </v-slide-y-transition>
                </v-card>
            </v-flex>
            <v-flex xs12 sm12 md6 lg4 pa-4>
                <v-card class="elevation-5">
                    <pop-time class="pt-4 px-3"/>
                    <v-card-title primary-title>
                        <div class="headline pl-3">Start Time</div>
                        <v-spacer />
                        <v-btn icon @click="showStart = !showStart" pr-3>
                            <v-icon>{{ showStart ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
                        </v-btn>
                    </v-card-title>
                    <v-slide-y-transition>
                        <v-card-text v-show="showStart" class="mx-2">
                            The service peaks around <b>5-7 PM</b>, which is when most people are beginning to head home. This suggests,
                            the bikes are possibly used a way to head home dodging the LA traffic. But we can also see that people
                            use this throughout the entire day, suggesting its convenience to users and an opportunity to exercise during the day. 
                        </v-card-text>
                    </v-slide-y-transition>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import Distance from "@/components/Distance";
import Popular from "@/components/Popular";
import Duration from "@/components/Duration";
import Plan from "@/components/Plan";
import PopTime from "@/components/PopTime";

export default {
  data() {
    return {
      showDistance: false,
      showPopular: false,
      showTime: false,
      showPlan: false,
      showStart: false
    };
  },
  components: {
    Popular,
    Distance,
    Duration,
    Plan,
    PopTime
  }
};
</script>
