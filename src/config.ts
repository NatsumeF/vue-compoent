export const fromConfig: any = {
    'inline':true,
    'labelPosition':"right",
    "labelWidth":"80px",
    "hideRequiredAsterisk":false,
    "showMessage":true,
    "statusIcon":true,
    "size":"small",
    needSubmit: true,
}

export const formItems: any = [
    {
        label:"姓名",
        prop:"name",
        placeholder:"请输入姓名",
        rules:[{ required: true, message: '请输入邮箱地址', trigger: 'blur' },]
    },
    {
        label:"password",
        prop:"password",
        type:"password",
        required:true,
        placeholder:"请输入姓名"
    },
    {
        label:"as",
        prop:"as",
        type:"hidden",
        required:true,
        placeholder:"请输入姓名"
    },{
        label:"time",
        prop:"time",
        type:"time",
        required:true,
        placeholder:"请输入姓名"
    },
    {
        label:"check",
        prop:"check",
        required:true,
        type:"checkbox",
        item:[
            {
                label:"a",
                value:"a"
            },{
                label:"b",
                value:"b"
            }
        ],
        placeholder:"请输入姓名"
    }, {
        label:"姓名",
        prop:"radio",
        required:true,
        type:"radio",
        item:[
            {
                label:"a",
                value:"a"
            },{
                label:"b",
                value:"b" 
            }
        ],
        placeholder:"请输入姓名"
    }, {
        label:"upload",
        prop:"upload",
        required:true,
        type:"upload",
        info:{isHeader:true,multiple:true},
        placeholder:"请输入姓名"
    },
    {
        label:"search",
        prop:"search",
        type:"search",
        item:[
            {
                label:"a",
                value:"a"
            },{
                label:"b",
                value:"b" 
            }
        ],
        placeholder:"请输入姓名"
    }
]