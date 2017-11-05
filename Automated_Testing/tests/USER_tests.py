from nose.tools import *
from user import User

def test_admin_user():
    foo_bar = User("FooBar", "password", True)
    assert_equal(foo_bar.user_name, "FooBar")
    assert_equal(foo_bar.password, "password")
    assert_equal(foo_bar.admin, True)

def test_guest_user():
    biz_baz = User("BizBaz", "password123", False)
    assert_equal(biz_baz.admin, False)
    
def test_user_apps():
    foo_bar = User("FooBar", "password", True)
    apps = {'app1': 'This is the first App', 'app2': 'This is the second App'}
    
    foo_bar.add_apps(apps)
    assert_equal(foo_bar.get_apps(), apps)

def test_user_app():
    foo_bar = User("FooBar", "password", True)
    apps = {'app1': 'This is the first App', 'app2': 'This is the second App'}
    
    foo_bar.add_apps(apps)
    assert_equal(foo_bar.get_app('app1'), 'This is the first App')
    assert_equal(foo_bar.get_app('app2'), 'This is the second App')
