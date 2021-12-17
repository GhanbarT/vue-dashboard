<template>
  <v-main class="grey lighten-4">
    <header>
      <v-row class="ma-5">
        <v-toolbar-title
          class="font-weight-light">
          Dashboard
        </v-toolbar-title>
        <v-spacer />
        <v-btn
          color="primary"
          small
          elevation="2"
          outlined
        >Add an employee
        </v-btn>
      </v-row>
      <v-divider />
    </header>

    <v-container style="height: 3000px"
                 id="dashboard"
                 tag="section"
                 class="col-12"
    >
      <v-row class="mb-1">
        <v-col cols="12" md="6" lg="4" class="px-8 px-md-4">
          <v-card
            class="mx-auto pt-2"
            height="">

            <v-sheet
              class="mx-auto orange lighten-5"
              elevation="6"
              max-width="calc(100% - 32px)"
            >
              <v-sparkline
                smooth="4"
                :labels="labels"
                :value="value"
                color="orange"
                line-width="2"
                padding="16"
                class="mt-2"
              />
            </v-sheet>

            <v-card-text class="pt-0 mt-2">
              <div class="text-h6 font-weight-light mb-1">
                User Registrations
              </div>
              <div class="subheading font-weight-light grey--text">
                Last Campaign Performance
              </div>
              <v-divider class="my-1" />
              <v-icon class="mr-2"
                      small>mdi-clock
              </v-icon>
              <span class="text-caption grey--text font-weight-light">last registration 26 minutes ago</span>
            </v-card-text>

          </v-card>
        </v-col>
        <v-col cols="12" md="6" lg="4" class="px-8 px-md-4">
          <v-card
            class="mx-auto pt-2"
            height="">

            <v-sheet
              class="mx-auto cyan lighten-5"
              elevation="6"
              max-width="calc(100% - 32px)"
            >
              <v-sparkline
                smooth="4"
                :labels="labels"
                :value="value"
                color="cyan"
                line-width="2"
                padding="16"
                class="mt-2"
              />
            </v-sheet>

            <v-card-text class="pt-0 mt-2">
              <div class="text-h6 font-weight-light mb-1">
                User Registrations
              </div>
              <div class="subheading font-weight-light grey--text">
                Last Campaign Performance
              </div>
              <v-divider class="my-1" />
              <v-icon class="mr-2"
                      small>mdi-clock
              </v-icon>
              <span class="text-caption grey--text font-weight-light">last registration 26 minutes ago</span>
            </v-card-text>

          </v-card>
        </v-col>
      </v-row>

      <v-divider class="my-2" />

      <div>
        <v-row no-gutters class="my-1">
          <v-subheader class="text-body-2">
            Key Indicators
          </v-subheader>
          <v-spacer />
          <v-col cols="3" style="height: 0">
            <v-select
              :items="keyIndicatorsOptions"
              v-model="indicatorSelected"
              label="Select"
              prepend-icon="mdi-calendar"
              solo />
          </v-col>
          <v-btn icon class="mx-2 align-end">
            <v-icon>
              mdi-dots-horizontal
            </v-icon>
          </v-btn>
        </v-row>
        <v-row class="my-2">
          <v-col cols="6" md="3" v-for="item in keyIndicatorsData" key="n">
            <v-sheet elevation="2" class="d-flex flex-column pa-5 rounded-lg lighten-5"
                     :class="[item.color, item.color+'--text']">
                  <span class="text-body-2">
                    {{ item.text }}
                    </span>
              <span class="my-3 text-h4 font-weight-bold">
                    {{ item.number }}
                  </span>
            </v-sheet>
          </v-col>
        </v-row>
      </div>

      <v-divider class="my-2" />

      <v-row>
        <v-col cols="12" md="8">
          <v-card>
            <v-container class="px-0" tag="section">
              <v-row no-gutters>
                <v-subheader class="text-body-2">
                  Cases
                </v-subheader>
                <v-spacer />
                <v-col cols="3" md="4" style="height: 0">
                  <v-select
                    :items="keyIndicatorsOptions"
                    v-model="indicatorSelected"
                    label="Select"
                    prepend-icon="mdi-calendar"
                    solo />
                </v-col>
                <v-btn icon class="mx-2 align-end">
                  <v-icon>
                    mdi-dots-horizontal
                  </v-icon>
                </v-btn>
              </v-row>

              <apexcharts width="100%" type="bar" height="350" :options="chartOptions" :series="series" />


            </v-container>
          </v-card>
        </v-col>

        <v-col cols="12" md="4">
          <v-card>
            <v-container class="px-0" tag="section">
              <v-row no-gutters>
                <v-subheader class="text-body-2">
                  Performance
                </v-subheader>
                <v-spacer />
                <v-col cols="3" md="5" style="height: 0">
                  <v-select
                    :items="keyIndicatorsOptions"
                    v-model="indicatorSelected"
                    label="Select"
                    prepend-icon="mdi-calendar"
                    solo />
                </v-col>
                <v-btn icon class="mx-2 align-end">
                  <v-icon>
                    mdi-dots-horizontal
                  </v-icon>
                </v-btn>
              </v-row>

              <div class="d-flex justify-center align-center">
                <v-progress-circular
                  :size="150"
                  :width="15"
                  :value="93"
                  color="teal"
                >
                  93%
                </v-progress-circular>
              </div>
            </v-container>
          </v-card>
        </v-col>
      </v-row>


    </v-container>


  </v-main>
</template>

<script>
export default {
  name: 'Dashboard',
  data() {
    return {
      series: [
        {
          name: 'Net Profit',
          data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
        }, {
          name: 'Revenue',
          data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
        }, {
          name: 'Free Cash Flow',
          data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
        }],
      chartOptions: {
        chart: {
          type: 'bar',
          height: 350
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '55%',
            endingShape: 'rounded'
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: true,
          width: 2,
          colors: ['transparent']
        },
        xaxis: {
          categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct']
        },
        yaxis: {
          title: {
            text: '$ (thousands)'
          }
        },
        fill: {
          opacity: 1
        },
        tooltip: {
          y: {
            formatter: function(val) {
              return '$ ' + val + ' thousands';
            }
          }
        }
      },
      indicatorSelected: '',
      keyIndicatorsOptions: [
        '1 week',
        '2 week',
        '3 week',
        '1 month',
        '2 month',
        '3 month',
        '6 month',
        '1 year',
        'All time'
      ],
      keyIndicatorsData: [
        {
          color: 'deep-purple',
          text: 'Successful cases',
          number: 280
        },
        {
          color: 'pink',
          text: 'Successful cases',
          number: 280
        },
        {
          color: 'light-green',
          text: 'Successful cases',
          number: 280
        },
        {
          color: 'indigo',
          text: 'Successful cases',
          number: 280
        }
      ],
      labels: [
        '12am',
        '3am',
        '6am',
        '9am',
        '12pm',
        '3pm',
        '6pm',
        '9pm'
      ],
      value: [
        200,
        675,
        410,
        390,
        310,
        460,
        250,
        240
      ]
    };
  },
};
</script>

<style scoped>

</style>
