#try out node.js
Steps carried out while creating this app
1)Create a node js module
2)Add package.json
3)then execute"npm pack"
4)npm pack
5)npm install censorify-0.1.1.tgz 
6)node readwords.js 

Install mean stack using 
sudo npm install -g mean-cli
brew update
brew install mongodb
 npm install -g gulp
  npm install -g bower
Install the MEAN CLI
 mean init hellomean
cd hellomean
npm install
  
Install log
RAHULs-MacBook-Air:nodejs rahulsinha$ brew  install mongodb
==> Downloading https://homebrew.bintray.com/bottles/mongodb-3.2.0.yosemite.bott
######################################################################## 100.0%
==> Pouring mongodb-3.2.0.yosemite.bottle.tar.gz
==> Caveats
To have launchd start mongodb at login:
  ln -sfv /usr/local/opt/mongodb/*.plist ~/Library/LaunchAgents
Then to load mongodb now:
  launchctl load ~/Library/LaunchAgents/homebrew.mxcl.mongodb.plist
Or, if you don't want/need launchctl, you can just run:
  mongod --config /usr/local/etc/mongod.conf
==> Summary
🍺  /usr/local/Cellar/mongodb/3.2.0: 17 files, 208M


RAHULs-MacBook-Air:nodejs rahulsinha$ mean init newapp
? What would you name your mean app? hellomean
? The Mean project is currently in developer preview. To help improve the -
  quality of this product, we collect anonymized data on how the mean-cli is used -
  You may choose to opt out of this collection now (by choosing 'N' at the below prompt)
  or at any time in the future by running the following command:

  mean disable user-reporting

  Do you want to help us improve the mean network (Y/n)?  n
Cloning branch: master into destination folder: hellomean
git clone  --depth 1  -bmaster https://github.com/linnovate/mean.git "hellomean"
Cloning into 'hellomean'...


                t  t                    
           t@@%SS%%XS@@S@X88X           
       8XtSS88.;::::8t.8t.:8S88X8:      	#	 WELCOME TO
   .8t@888 ;t8.8 8  :8%;.8:;8t.;8S88;   	#	 THE MEAN STACK
 tt@8;;;. ::. . . :;::..::8%  8::8;X88%;	#
 X8;t;8 :XSXXS@t8 :8;.8t88     8;: 8t8t 	#	 BEFORE YOU START
 ;;::. :8:XSXXS8 :. 8%; ;:     8.8%;:S@t	#	 Make sure you have the prerequisites 
  X.8 :. XXXSXSS88  :..88      8::..8;% 	#	 Node.js, MongoDB and Git installed
  @8;:8 :XSXXSXS% .:8t:8.      S.8t.;.. 	#	 And install gulp globally 
  @S;. ::XXSX%XXS8:.;.;t. X%   8::.8@X  	#	  $ sudo npm install -g gulp
  88;::8 SXXS@@%XX88;88  .t;   88t.:@%8 	#
  %;:8  :XSX@..8SSS :@   S.t   St.8;%@  	#	 Install npm (server) dependencies:
   %: .::XXSXXt:@XSS S  X 8    8..;.8;  	#	  $ npm install
   8SS8 :XSXX%;8@@XXS  :;.;    8.8;8 ;  	#	 Install bower (client side) dependencies:
   :S: :8:XXX;. ;XSX   8:8t    S;:.Xt   	#	  $ bower install
   @88 . XSXX%:;:;XX  8..:.    88t.8%   	#
   X: :;:XXSXS;8 88t ;:8t.8    8t.8S@:  	# 	 NOTE ABOUT PERMISSIONS
    t.:8 SXSX%. . .S S%:8%     8 ::8%   	#	 Most installation problems are related
    88; :8888@8 .::88.8%  :8888t8;;;@   	#	 to permissions, your ~/.npm directory 
    :@@@t88 t  :8 . :.:..8  8 .8S8Xt.   	#	 should be owned by your user and not root. 
      ;t8S8@@8 . ::8;8;8% :tX88@%.8     	#
         ;:.@8@%88   ; ;@88@t8;:        	#	 For more info and documentation 
             ;;8S88S;8%888;8            	#	 Checkout http://learn.mean.io
                ;::tS88                 	#
                   t8                   	#	 For support and the community
						#	 Checkout http://gitter.im/linnovate/mean

  Added the "remote" upstream origin


#############################################

  Congratulations you have mean.io installed.

Before you install the dependencies and fire up the server we can help you with setting up your first admin user.
? Cool, bring it on: (N) 
  
Needed to delete node_modules and rerun sudo npm install
To start mongodb
mkdir -p /data/db
mongod

bower install to resolve bootstarp.css not found  