new Vue({
    data: function () {
        this.$notify({
            title: "哎嘿！复制成功😜",
            message: "若要转载请标明原文链接哦！o(*￣︶￣*)o",
            position: 'top-left',
            offset: 50,
            showClose: true,
            type: "warning",
            duration: 5000
        });
    }
})