# For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
Rails.application.routes.draw do
  root to: 'tic_tac_toe#show'
  get 'questions/index'
  get 'tic_tac_toe/show'
  get 'mobx/show'
  get 'spa/show'
end
