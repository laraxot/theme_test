<?php

declare(strict_types=1);

namespace Themes\Test\View\Composers;

use ErrorException;
use Illuminate\View\View;
use Modules\Xot\View\Composers\XotBaseComposer;

// use Themes\AdminLTE\Services\AdminLTE;

class ThemeComposer extends XotBaseComposer
{
    public array $video_markers = [];

    /**
     * Bind data to the view.
     *
     * @return void
     */
    public function compose(View $view)
    {
        // $view->with('adminlte', $this->adminlte);
        $view->with('_theme', $this);
    }
}
