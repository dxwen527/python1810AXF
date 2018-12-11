$(function () {
    $('.register').width(innerWidth)

    // 邮箱验证
    $('#email input').blur(function () {
        if ($(this).val() == '') return
        var reg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
        if (reg.test($(this).val())) { // 符合要求

            // 发起ajax请求　　>>> 　邮箱是否可用　？？？
            // jQuery.post( url [, data ] [, success(data, textStatus, jqXHR) ] [, dataType ] )
            $.get('/checkemail/', {'email': $(this).val()}, function (response) {
                console.log(response)
                if (response.status) {  // 账号可用
                    $('#email i').html()
                    $('#email').removeClass('has-error').addClass('has-success')
                    $('#email span').removeClass('glyphicon-remove').addClass('glyphicon-ok')
                } else { // 账号不可用
                    $('#email i').html(response.msg)
                    $('#email').removeClass('has-success').addClass('has-error')
                    $('#email span').removeClass('glyphicon-ok').addClass('glyphicon-remove')
                }
            })

        } else { // 不符合要求
            $('#email i').html('请输入正确邮箱格式')
            $('#email').removeClass('has-success').addClass('has-error')
            $('#email span').removeClass('glyphicon-ok').addClass('glyphicon-remove')
        }
    })

    // 密码验证
    $('#password input').blur(function () {
        if ($(this).val() == '') return
        var reg = /^[a-zA-Z\d_]{6,12}$/
        if (reg.test($(this).val())) {
            $('#password i').html('')
            $('#password').removeClass('has-error').addClass('has-success')
            $('#password span').removeClass('glyphicon-remove').addClass('glyphicon-ok')
        } else {
            $('#password i').html('长度为6~12，且只能为数字、字母、下划线')
            $('#password').removeClass('has-success').addClass('has-error')
            $('#password span').removeClass('glyphicon-ok').addClass('glyphicon-remove')
        }
    })
    //　确认密码
    $('#password-d input').blur(function () {
        if ($(this).val() == '') return
        var f_val = $('#password input').val()
        var d_val = $(this).val()
        if (f_val == d_val) {
            $('#password-d i').html('')
            $('#password-d').removeClass('has-error').addClass('has-success')
            $('#password-d span').removeClass('glyphicon-remove').addClass('glyphicon-ok')
        } else {
            $('#password-d i').html('两次密码输入不一致')
            $('#password-d').removeClass('has-success').addClass('has-error')
            $('#password-d span').removeClass('glyphicon-ok').addClass('glyphicon-remove')
        }
    })

    // 名字
    $('#name input').blur(function () {
        if ($(this).val() == '') return
        if ($(this).val().length >= 3 && $(this).val().length <= 12) {
            $('#name i').html('')
            $('#name').removeClass('has-error').addClass('has-success')
            $('#name span').removeClass('glyphicon-remove').addClass('glyphicon-ok')
        } else {
            $('#name i').html('昵称为3～12任意字符')
            $('#name').removeClass('has-success').addClass('has-error')
            $('#name span').removeClass('glyphicon-ok').addClass('glyphicon-remove')
        }
    })

    // 手机
    $('#phone input').blur(function () {
        if ($(this).val() == '') return
        var reg = /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9]))\d{8}$/
        if (reg.test($(this).val())) {
            $('#phone i').html('')
            $('#phone').removeClass('has-error').addClass('has-success')
            $('#phone span').removeClass('glyphicon-remove').addClass('glyphicon-ok')
        } else {
            $('#phone i').html('手机格式错误')
            $('#phone').removeClass('has-success').addClass('has-error')
            $('#phone span').removeClass('glyphicon-ok').addClass('glyphicon-remove')
        }
    })
    // 为了校验数据格式是否正确，所以点击注册时，触发点击事件
    // 在点击事件中，进行数据校验
    // 校验没问题，即发起ajax请求【注册】
    $('#subButton').click(function () {
        var isRegister = true // 默认可以注册

        $('input').each(function () {
            if ($(this).val() == '') {
                isRegister = false
            }
        })
        console.log(isRegister)
        if (isRegister) {
            $('#register-view').submit()
        }
    })
})