<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Filesystem\Filesystem;

class SetupStorageCommand extends Command
{

    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'storage:generate {storagePath?}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Setup the Laravel storage folder structure. Useful when mounting an empty directory to replace storage/ in production or staging environments.';

    /**
     * Execute the console command.
     *
     * @param Filesystem $filesystem
     * @return void
     */
    public function handle(Filesystem $filesystem)
    {
        $rootDirectory = $this->argument('storagePath');
        if(!isset($rootDirectory) && isset($_ENV['APP_STORAGE'])){
            $rootDirectory = $_ENV['APP_STORAGE'];
        }
        elseif (!isset($_ENV['APP_STORAGE'])){
            $this->error('{storagePath} not provided, please provide it or set the APP_STORAGE environment variable');
            return;
        }

        $rootDirectory = str_replace(['/', '\\'], DIRECTORY_SEPARATOR, $rootDirectory);
        if($filesystem->exists($rootDirectory) == false){
            $filesystem->makeDirectory($rootDirectory);
        }

        $directories = [
            'app',
            'app' . DIRECTORY_SEPARATOR .'public',
            'framework',
            'framework' . DIRECTORY_SEPARATOR .'cache',
            'framework' . DIRECTORY_SEPARATOR .'sessions',
            'framework' . DIRECTORY_SEPARATOR .'testing',
            'framework' . DIRECTORY_SEPARATOR .'views',
            'logs',
        ];

        foreach ($directories as $directory) {
            if ($rootDirectory !== null) {
                $directory = app()->joinPaths($rootDirectory, $directory);
            }

            if ($filesystem->exists($directory)) {
                continue;
            }

            $filesystem->makeDirectory($directory);
        }

        $this->info("Storage structure generated.");
    }
}
