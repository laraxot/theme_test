<?php

declare(strict_types=1);

namespace Themes\Test\Providers;

use Modules\Xot\Providers\XotBaseThemeServiceProvider;

/**
 * Undocumented class.
 */
class TestServiceProvider extends XotBaseThemeServiceProvider
{
    public string $dir = __DIR__;
    public string $name = 'Test';
    public string $ns = 'pub_theme';
}
