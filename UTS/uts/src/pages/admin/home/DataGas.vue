<template>
 <div class="q-pa-md">
    <q-table
      title="Treats"
      :data="data"
      :columns="columns"
      row-key="id"
      :filter="filter"
      :loading="loading"
    >

      <template v-slot:top>
        <q-btn color="primary" :disable="loading" label="Tambah Data Gas" to="/admin/inputdatagas"/>
        <!-- <q-btn class="q-ml-sm" color="primary" :disable="loading" label="Remove row" @click="removeRow" /> -->
        <q-space />
        <q-input borderless dense debounce="300" color="primary" v-model="filter">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>

    </q-table>
  </div>

</template>

<script>
export default {
  data () {
    return {
      loading: false,
      filter: '',
      rowCount: 10,
      columns: [
        {
          name: 'desc',
          required: true,
          label: 'Kode Gas',
          align: 'left',
          field: row => row.kodeGas,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'tipeGas', align: 'center', label: 'Tipe Gas', field: 'tipeGas', sortable: true },
        { name: 'stockGas', align: 'center', label: 'Stock Kopi', field: 'stockGas' },
        { name: 'hargaGas', align: 'center', label: 'Harga', field: 'hargaGas' }
      ],
      data: [
        {
          kodeGas: 'K001',
          tipeGas: 'Gas 3 Kg',
          stockGas: '100',
          hargaGas: 'Rp.22.000'
        },
        {
          kodeGas: 'K002',
          tipeGas: 'Gas 5,5 Kg',
          stockGas: '50',
          hargaGas: 'Rp.55.000'
        },
        {
          kodeGas: 'K003',
          tipeGas: 'Gas 12 Kg',
          stockGas: '12',
          hargaGas: 'Rp.165.000'
        }
      ]
    }
  },

  methods: {
    // emulate fetching data from server
    addRow () {
      this.loading = true
      setTimeout(() => {
        const
          index = Math.floor(Math.random() * (this.data.length + 1)),
          row = this.original[Math.floor(Math.random() * this.original.length)]
        if (this.data.length === 0) {
          this.rowCount = 0
        }
        row.id = ++this.rowCount
        const addRow = { ...row } // extend({}, row, { name: `${row.name} (${row.__count})` })
        this.data = [...this.data.slice(0, index), addRow, ...this.data.slice(index)]
        this.loading = false
      }, 500)
    },

    removeRow () {
      this.loading = true
      setTimeout(() => {
        const index = Math.floor(Math.random() * this.data.length)
        this.data = [...this.data.slice(0, index), ...this.data.slice(index + 1)]
        this.loading = false
      }, 500)
    }
  }
}
</script>
