<template>
<q-page>
 <div class="q-pa-md">
    <q-table
      title="`Treats"
      :data="data"
      :columns="columns"
      row-key="id"
      :filter="filter"
      :loading="loading"
    >

      <template v-slot:top>
        <span class="text-h5 text-weight-light q-pa-md">
        <span class="text-blue-grey-14">Data Transaksi</span>
        </span>
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
</q-page>
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
          label: 'Kode Transaksi',
          align: 'left',
          field: row => row.kodeTransaksi,
          format: val => `${val}`,
          sortable: true
        },
        {
          name: 'desc',
          required: true,
          label: 'Kode Gas',
          align: 'left',
          field: row => row.kodeGas,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'namaPembeli', align: 'center', label: 'Nama Pembeli', field: 'namaPembeli', sortable: true },
        { name: 'tipeGas', align: 'center', label: 'Tipe Gas', field: 'tipeGas', sortable: true },
        { name: 'harga', align: 'center', label: 'Harga', field: 'harga' },
        { name: 'total', align: 'center', label: 'Total Pembelian', field: 'total' },
        { name: 'statusPembelian', align: 'center', label: 'Status Pembelian', field: 'statusPembelian' }
      ],
      data: [
        {
          kodeTransaksi: 'C001',
          kodeGas: 'K001',
          namaPembeli: 'Dwi Novendra',
          tipeGas: 'Gas 3 kg',
          harga: 'Rp. 22.000',
          total: '1',
          statusPembelian: 'Sedang Diantar'
        },
        {
          kodeTransaksi: 'C001',
          kodeGas: 'K001',
          namaPembeli: 'Roby Ortega',
          tipeGas: 'Gas 3 kg',
          harga: 'Rp. 44.000',
          total: '2',
          statusPembelian: 'Sedang Diantar'
        },
        {
          kodeTransaksi: 'C001',
          kodeGas: 'K001',
          namaPembeli: 'Angga Saputra',
          tipeGas: 'Gas 5,5 kg',
          harga: 'Rp. 65.000',
          total: '1',
          statusPembelian: 'Sedang Diantar'
        },
        {
          kodeTransaksi: 'C001',
          kodeGas: 'K001',
          namaPembeli: 'Nila Cahaya',
          tipeGas: 'Gas 3 kg',
          harga: 'Rp. 165.000',
          total: '1',
          statusPembelian: 'Sedang Diantar'
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
