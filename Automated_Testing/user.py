class User(object):
    def __init__(self, user_name, password, admin):
        self.user_name = user_name
        self.password = password
        self.admin = admin
        self.apps = {}

    def get_app(self, app):
        return self.apps.get(app, None)
    
    def get_apps(self):
        return self.apps
    
    def add_apps(self, apps):
        self.apps.update(apps)
