    <nav class="navbar navbar-expand-lg">
        <ul class="navbar-nav">
            <li class="nav-item">
                <h1 class="nav-link">my app</h1>
            </li>
            @if (Auth::check())
            <li class="nav-item dropdown align-self-center">
                <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="true">{{ $user->first_name }} {{ $user->last_name }}</a>
                <div class="dropdown-menu">
                    <a href="/logout" class="nav-link dropdown-item">Logout</a>
                </div>
            </li>
            @endif
        </ul>    
    </nav>

