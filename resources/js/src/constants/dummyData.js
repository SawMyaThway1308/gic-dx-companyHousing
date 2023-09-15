const dummyData = {
    equipment: {
        equipment:[
            {
                id: '1',
                name: '備品種類',
              },
              {
                  id: '2',
                  name: '備品コード',
              },
              {
                  id: '3',
                  name: '備品名',
              },
              {
                  id: '4',
                  name: '購入年',
              },
              {
                  id: '5',
                  name: 'メーカー',
              },
              {
                  id: '6',
                  name: 'モデル',
              },
              {
                  id: '7',
                  name: 'スターテス',
              },
              {
                  id: '8',
                  name: '住所',
              },
        ]
    },

   equipmentType: {
        equipmentType: [
            { name: '未設定', value: '0' },
            { name: '皿', value: '1' },
            { name: '冷蔵庫', value: '2' },
        ]
    },

    equipmentAddress: {
        equipmentAddress: [
            { name: '未設定', value: '0' },
            { name: '東京', value: '1' },
            { name: '大阪', value: '2' },
        ]
    },

    equipmentData: {
        equipmentData: [
            { column1: 'Data 1A', column2: 'Data 1B' },
            { column1: 'Data 2A', column2: 'Data 2B' },
        ]
    }
};

export default dummyData;