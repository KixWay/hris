<?php
/**
 * Description of MY_Controller
 *
 * @author red
 */
class MY_Controller extends CI_Controller {
    public $uri_params = array();
    private $_vars = array();
    public function __construct() {
        parent::__construct();
        $vars = array(
            'base_url' => BASE_URL,
            'logo' => 'assets/admin/layout2/img/logo-default.png',
            'favicon' => 'assets/global/img/flags/ph.png',
            'theme' => 'layout2',
        );
        $this->setVar($vars);
    }
    
    /**
     * Display page
     * @param string $page
     */
    public function viewPage($page=NULL)
    {
        $this->twiggy->set($this->_vars);
        $this->twiggy->template($page)->display();
    }
    /**
     * Set variable
     * @param array $array
     * @return boolean
     */
    public function setVar($array = array())
    {
        if(count($array)==0 || !is_array($array)) return false;
        foreach($array as $key => $val)
        {
            $this->_vars[$key] = $val;
        }
        return;
    }
}
