<template>

  <v-container
    style="height: 3000px"
    id="dashboard"
    tag="section"
    class="col-12">

    <!--  sparkline  sheets -->
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

    <!--  Key Indicator -->
    <div>
      <!--   Indicator Selector    -->
      <v-row no-gutters class="my-1">
        <v-subheader class="text-body-1 text-capitalize">
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

      <!-- Indicator Sheets -->
      <v-row class="my-2">
        <v-col cols="6" md="3" v-for="item in keyIndicatorsData" :key="item.color">

          <v-sheet
            elevation="2"
            class="d-flex flex-column pa-5 rounded-lg lighten-5"
            :class="[item.color, item.color+'--text']"
          >
            <span class="text-body-2"> {{ item.text }} </span>
            <span class="my-3 text-h4 font-weight-bold"> {{ item.number }} </span>
          </v-sheet>

        </v-col>
      </v-row>
    </div>

    <v-divider class="my-2" />

    <!--  Charts  -->
    <v-row height="600">
      <!--   Cases (Bar) Chart   -->
      <v-col cols="12" lg="8">
        <v-card height="100%">
          <v-container height="100%" tag="section">
            <!--  Bar Chart Selector  -->
            <v-row no-gutters>
              <v-subheader class="text-body-1 text-capitalize">
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

            <apexcharts
              type="bar"
              :options="casesChartOptions"
              :series="casesChartSeries" />
          </v-container>
        </v-card>
      </v-col>

      <!--   Performance (Circular) Chart   -->
      <v-col cols="12" lg="4">
        <v-card height="100%">
          <v-container class="px-0 d-flex flex-column" style="height: 100%" tag="section">

            <!--  Circular Chart Selector  -->
            <v-row no-gutters class="flex-grow-0">
              <v-subheader
                class="text-body-1 text-capitalize ">
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
                <v-icon> mdi-dots-horizontal</v-icon>
              </v-btn>
            </v-row>

            <apexcharts
              class="mx-auto my-auto"
              type="radialBar"
              :options="performanceChartOptions"
              :series="performanceChartSeries" />

          </v-container>
        </v-card>
      </v-col>
    </v-row>

  </v-container>

</template>

<script>
export default {
  name: 'Dashboard',
  data() {
    return {
      casesChartSeries: [
        {
          name: 'Net Profit',
          data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
        },
        {
          name: 'Revenue',
          data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
        },
        {
          name: 'Free Cash Flow',
          data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
        }
      ],
      casesChartOptions: {
        chart: {
          type: 'bar',
          height: 300,
          width: '100%',
          toolbar: {
            show: false
          }
        },
        xaxis: {
          categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct']
        },
        yaxis: {
          title: {
            text: '$ (thousands)'
          }
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '60%'
          }
        },
        stroke: {
          show: true,
          width: 2,
          colors: ['transparent']
        },
        dataLabels: {
          enabled: false
        }
      },
      performanceChartSeries: [89],
      performanceChartOptions: {
        chart: {
          type: 'radialBar',
          sparkline: {
            enabled: true
          }
        },
        plotOptions: {
          radialBar: {
            startAngle: -110,
            endAngle: 110,
            track: {
              background: 'rgba(213,213,213,0.6)',
              startAngle: -110,
              endAngle: 110
            },
            hollow: {
              margin: 0,
              size: '75%'
            },
            dataLabels: {
              name: {
                show: false
              },
              value: {
                offsetY: -5,
                fontSize: '2.75rem',
                show: true
              }
            }
          }
        },
        fill: {
          type: 'gradient',
          gradient: {
            type: 'horizontal',
            colorStops: [
              {
                offset: 0,
                color: 'red',
                opacity: 0.75
              },
              {
                offset: 20,
                color: 'orange',
                opacity: 1
              },
              {
                offset: 50,
                color: 'yellow',
                opacity: 1
              },
              {
                offset: 100,
                color: 'green',
                opacity: 0.65
              }
            ]
          }
        },
        stroke: {
          lineCap: 'round'
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
  mounted() {
    this.casesChartOptions = {
      ...this.casesChartOptions,
      chart: {
        ...this.casesChartOptions.chart,
        height: 400,
        width: '100%'
      }
    };

    this.performanceChartOptions = {
      ...this.performanceChartOptions,
      chart: {
        ...this.performanceChartOptions.chart
      }
    };
  }
};
</script>

<style scoped>

</style>
