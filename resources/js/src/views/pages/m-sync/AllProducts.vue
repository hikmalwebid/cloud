<!-- =========================================================================================
    File Name: TableMiscellaneous.vue
    Description: Combine filter,sorter, pagination etc.
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <vx-card title="Miscellaneous" code-toggler>

        <p>You can add a <strong>filtered, sorted, paginated and multi selected</strong> table with combination of the <code>search</code>, <code>multiple</code> and <code>pagination</code> properties for example</p><br>

        {{ users }}

        <vs-table multiple v-model="selected" pagination max-items="4" search :data="users">

            <template slot="thead">
                <vs-th sort-key="email">Email</vs-th>
                <vs-th sort-key="username">Name</vs-th>
                <vs-th sort-key="website">Website</vs-th>
                <vs-th sort-key="id">Nro</vs-th>
            </template>

            <template slot-scope="{data}">
                <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">

                    <vs-td :data="data[indextr].email">
                        {{data[indextr].email}}
                    </vs-td>

                    <vs-td :data="data[indextr].username">
                        {{data[indextr].username}}
                    </vs-td>

                    <vs-td :data="data[indextr].id">
                        {{data[indextr].website}}
                    </vs-td>

                    <vs-td :data="data[indextr].id">
                        {{data[indextr].id}}
                    </vs-td>

                </vs-tr>
            </template>
        </vs-table>

    </vx-card>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      'selected': [],
      'tableList': [
        'vs-th: Component',
        'vs-tr: Component',
        'vs-td: Component',
        'thread: Slot',
        'tbody: Slot',
        'header: Slot'
      ],
      'users': null
    }
  },
  mounted() {
    this.load()
  },
  methods: {
    load(){
        axios.get('https://api.medigi.id/api/woocommerce-get-product-all').then(res => {
        this.users = res.data //respon dari rest api dimasukan ke users
      }).catch ((err) => {
        console.log(err);
      })
    }
  }
}
</script>
