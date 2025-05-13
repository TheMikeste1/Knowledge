" https://github.com/esm7/obsidian-vimrc-support

set clipboard=unnamed

nnoremap j gj
vnoremap j gj
nnoremap k gk
vnoremap k gk

nnoremap $ g$
vnoremap $ g$
nnoremap ^ g^
vnoremap ^ g^

nnoremap 0 g0
vnoremap 0 g0

nnoremap <Down> gj
vnoremap <Down> gj
nnoremap <Up> gk
vnoremap <Up> gk

inoremap <Down> <C-o>gj
inoremap <Up> <C-o>gk

exmap back obcommand app:go-back
exmap forward obcommand app:go-forward
nmap <C-o> :back<CR>
nmap <C-i> :forward<CR>

exmap vsplit obcommand workspace:split-vertical
exmap hsplit obcommand workspace:split-horizontal
nmap <C-w>v :vsplit<CR>
nmap <C-w>s :hsplit<CR>

exmap q obcommand workspace:close
exmap qa obcommand workspace:close-window

exmap followlink obcommand editor:follow-link
nmap gd :followlink<CR>

" Emulate Folding https://vimhelp.org/fold.txt.html#fold-commands
exmap togglefold obcommand editor:toggle-fold
nmap zo :togglefold<CR>
nmap zc :togglefold<CR>
nmap za :togglefold<CR>

exmap unfoldall obcommand editor:unfold-all
nmap zR :unfoldall<CR>

exmap foldall obcommand editor:fold-all
nmap zM :foldall<CR>

exmap tabnext obcommand workspace:next-tab
nmap gt :tabnext<CR>
exmap tabprev obcommand workspace:previous-tab
nmap gT :tabprev<CR>

exmap focusRight obcommand editor:focus-right
nmap <C-w>l :focusRight
exmap focusLeft obcommand editor:focus-left
nmap <C-w>h :focusLeft
exmap focusTop obcommand editor:focus-top
nmap <C-w>k :focusTop
exmap focusBottom obcommand editor:focus-bottom
nmap <C-w>j :focusBottom
