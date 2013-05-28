EmberFormPatterns::Application.routes.draw do
  resources :letters
  resources :gifts
  match '/(*anything)' => 'main#index'
end
