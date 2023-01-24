# Serving A Default Site With Valet

Configure Valet to serve a "default" site instead of a `404` when visiting an unknown `test` domain. To accomplish this, you may add a `default` option to your `~/.config/valet/config.json` configuration file containing the path to the site that should serve as your default site:

```json
"default": "/Users/jordy/Sites/default",
```

## Learn more

[Check out the official Valet documentation](https://laravel.com/docs/9.x/valet)
