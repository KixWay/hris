<?php
/**
 * Description of main
 *
 * @author red
 */
class Main extends MY_Controller {
    public function __construct() {
        parent::__construct();
    }
    public function index()
    {
        $this->about();
    }
    
    public function about()
    {
        $this->viewPage('about');
    }
}
