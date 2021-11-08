
import Echo from "laravel-echo"

window.Echo = new Echo({
    broadcaster: 'pusher',
    key: 'b5c1c869e5b9fb161150',
    cluster: 'eu',
    encrypted: true
});
