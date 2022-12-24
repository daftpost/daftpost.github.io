(function() {
  var loaderTimeout;

  window.getVideoLinks = function() {
    var url = window.jQuery("#url").val().trim();

    if ((_video = url.match(/(biqle.ru|biqle.com|daftsex.com)\/watch\/(-?[1-9][0-9]*|-?[1-9])_([1-9][0-9]*|[1-9])/i))) {
      var oid = parseInt(_video[2]) || 0, id = parseInt(_video[3]) || 0;

      if (location.href !== "https://savevk.com/"+(lang == "EN" ? "" : lang.toLowerCase() + "/")+_video[1]+"/video" + oid + "_" + id) {
        location.href = (lang == "EN" ? "" : "/"+lang.toLowerCase())+"/"+_video[1]+"/video" + oid + "_" + id;
      };

      return false;
    } else if (matches = url.match(/video(-?[1-9][0-9]*|-?[1-9])_([1-9][0-9]*|[1-9])/gi)) {
      matches = window.jQuery.grep(matches, function(v, k){
        return window.jQuery.inArray(v ,matches) === k;
      });

      if (_video = matches[0].match(/video(-?[1-9][0-9]*|-?[1-9])_([1-9][0-9]*|[1-9])/i)) {
        var oid = parseInt(_video[1]) || 0, id = parseInt(_video[2]) || 0;

        if (location.href !== "https://savevk.com/"+(lang == "EN" ? "" : lang.toLowerCase() + "/")+"video" + oid + "_" + id) {
          location.href = (lang == "EN" ? "" : "/"+lang.toLowerCase())+"/video" + oid + "_" + id;
        };

        return false;
      };
    } else if ((video_id = url.match(/[^o]id=([1-9][0-9]*|[1-9])/)) && (video_oid = url.match(/oid=(-?[1-9][0-9]*|-?[1-9])/))) {
      var oid = parseInt(video_oid[1]) || 0, id = parseInt(video_id[1]) || 0;

      if (location.href !== "https://savevk.com/"+(lang == "EN" ? "" : lang.toLowerCase() + "/")+"video" + oid + "_" + id) {
        location.href = (lang == "EN" ? "" : "/"+lang.toLowerCase())+"/video" + oid + "_" + id;
      };

      return false;
    } else if (matches = url.match(/watch\/(-?[1-9][0-9]*|-?[1-9])_([1-9][0-9]*|[1-9])/i)) {
      var oid = parseInt(matches[1]) || 0, id = parseInt(matches[2]) || 0;

      if (location.href !== "https://savevk.com/"+(lang == "EN" ? "" : lang.toLowerCase() + "/")+"video" + oid + "_" + id) {
        location.href = (lang == "EN" ? "" : "/"+lang.toLowerCase())+"/video" + oid + "_" + id;
      };

      return false;
    };

    window.jQuery("#url").focus();

    return false;
  };

  window.jQuery("#url").focus();

  function walkVar(t, e) {
    switch (typeof t) {
      case "string":
        if (e) {
          return t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
        } else {
          return t.replace(/&#039;/g, "'").replace(/&quot;/g, "\"").replace(/&gt;/g, ">").replace(/&lt;/g, "<").replace(/&amp;/g, "&");
        };
      case "object":
        if ("[object Array]" === Object.prototype.toString.apply(t)) {
          newValue = [];
          for (var n = 0; n < t.length; n++) newValue[n] = walkVar(t[n], e);
        } else
          for (var i in t) newValue = {}, Object.hasOwnProperty.call(t, i) && (newValue[i] = walkVar(t[i], e));
      default:
        newValue = t;
    };
    return newValue;
  };

  var _ls={setItem:function(){return!1},getItem:function(){return null}};try{window.localStorage&&(_ls=window.localStorage)}catch(a){};function getCookie(a){var b=document.cookie.match(new RegExp("(?:^|; )"+a.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g,'\\$1')+"=([^;]*)"));return b?decodeURIComponent(b[1]):void 0}function setCookie(a,b,c){c=c||{};var d=c.expires;if("number"==typeof d&&d){var e=new Date;e.setTime(e.getTime()+1e3*d),d=c.expires=e}d&&d.toUTCString&&(c.expires=d.toUTCString()),b=encodeURIComponent(b);var f=a+"="+b;for(var g in c){f+="; "+g;var h=c[g];h!==!0&&(f+="="+h)}document.cookie=f};
  function strrev(a){var b="",c=0;for(c=a.length-1;c>=0;c--)b+=a.charAt(c);return b}function base64_decode(a){var b,c,d,e,f,g,h,i,j="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",k=0,l="";do e=j.indexOf(a.charAt(k++)),f=j.indexOf(a.charAt(k++)),g=j.indexOf(a.charAt(k++)),h=j.indexOf(a.charAt(k++)),i=e<<18|f<<12|g<<6|h,b=i>>16&255,c=i>>8&255,d=255&i,l+=64==g?String.fromCharCode(b):64==h?String.fromCharCode(b,c):String.fromCharCode(b,c,d);while(k<a.length);return l}function getServer(){return base64_decode(strrev(videoParams.server))}function parse_url(a){for(var b=["source","scheme","authority","userInfo","user","pass","host","port","relative","path","directory","file","query","fragment"],c=new RegExp(["(?:([^:\\/?#]+):)?","(?:\\/\\/()(?:(?:()(?:([^:@\\/]*):?([^:@\\/]*))?@)?([^:\\/?#]*)(?::(\\d*))?))?","()","(?:(()(?:(?:[^?#\\/]*\\/)*)()(?:[^?#]*))(?:\\?([^#]*))?(?:#(.*))?)"].join("")),d=c.exec(a),e={},f=14;f--;)d[f]&&(e[b[f]]=d[f]);return delete e.source,e}function formatTime(a){var b=Math.floor(a/86400),c=Math.floor((a-86400*b)/3600),d=Math.floor((a-86400*b-3600*c)/60);return a=a-86400*b-3600*c-60*d,d<10&&c&&(d="0"+d),a<10&&(a="0"+a),(b?b+"d ":"")+(c?c+":":"")+d+":"+a}function psr(a) {return "https:" != location.protocol ? a : (a = a.replace(/http:\/\/(cs(\d+)\.vk\.me\/c(\d+)\/)/gi, "https://$1"), a = a.replace(/http:\/\/cs(\d+)\.(userapi\.com|vkuservideo\.net|vk\.com|vk\.me|vkontakte\.ru)\/c(\d+)\/(v\d+\/|[a-z0-9\/_:\-]+\.jpg)/gi, "https://pp.vk.me/c$3/$4"), a = a.replace(/http:\/\/cs(\d+)\.(userapi\.com|vkuservideo\.net|vk\.com|vk\.me|vkontakte\.ru)\/([a-z0-9\/_:\-]+\.jpg)/gi, "https://pp.vk.me/c$1/$3"), a = a.replace(/http:\/\/cs(\d+)\.(userapi\.com|vkuservideo\.net|vk\.com|vk\.me|vkontakte\.ru)\//gi, "https://ps.vk.me/c$1/"), a = a.replace(/http:\/\/video(\d+)\.vkadre\.ru\//gi, "https://ps.vk.me/v$1/"), a = a.replace(/http:/gi, "https:"))};
  !function(){function t(e,i,o){this.maxSize_=e||-1,this.debug_=i||!1,this.storage_=o||new t.BasicCacheStorage,this.fillFactor_=0.75,this.stats_={},this.stats_.hits=0,this.stats_.misses=0,this.log_("Initialized cache with size "+e)}t.Priority={LOW:1,NORMAL:2,HIGH:4},t.BasicCacheStorage=function(){this.items_={},this.count_=0},t.BasicCacheStorage.prototype.get=function(t){return this.items_[t]},t.BasicCacheStorage.prototype.set=function(t,e){"undefined"==typeof this.get(t)&&this.count_++,this.items_[t]=e},t.BasicCacheStorage.prototype.size=function(t,e){return this.count_},t.BasicCacheStorage.prototype.remove=function(t){var e=this.get(t);return"undefined"!=typeof e&&this.count_--,delete this.items_[t],e},t.BasicCacheStorage.prototype.keys=function(){var t,e=[];for(t in this.items_)e.push(t);return e},t.LocalStorageCacheStorage=function(t){this.prefix_="cache-storage."+(t||"default")+".";var e=this.prefix_.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,'\\$&');this.regexp_=new RegExp("^"+e)},t.LocalStorageCacheStorage.prototype.get=function(t){var e=_ls[this.prefix_+t];return e?JSON.parse(e):null},t.LocalStorageCacheStorage.prototype.set=function(t,e){_ls[this.prefix_+t]=JSON.stringify(e)},t.LocalStorageCacheStorage.prototype.size=function(t,e){return this.keys().length},t.LocalStorageCacheStorage.prototype.remove=function(t){var e=this.get(t);return delete _ls[this.prefix_+t],e},t.LocalStorageCacheStorage.prototype.keys=function(){var t,e=[];for(t in _ls)t.match(this.regexp_)&&e.push(t.replace(this.prefix_,""));return e},t.prototype.getItem=function(t){var e=this.storage_.get(t);null!=e&&(this.isExpired_(e)?(this.removeItem(t),e=null):e.lastAccessed=(new Date).getTime());var i=e?e.value:null;return i?(this.stats_.hits++,this.log_("Cache HIT for key "+t)):(this.stats_.misses++,this.log_("Cache MISS for key "+t)),i},t._CacheItem=function(e,i,o){if(!e)throw new Error("key cannot be null or empty");this.key=e,this.value=i,o=o||{},o.expirationAbsolute&&(o.expirationAbsolute=o.expirationAbsolute.getTime()),o.priority||(o.priority=t.Priority.NORMAL),this.options=o,this.lastAccessed=(new Date).getTime()},t.prototype.setItem=function(e,i,o){if(null!=this.storage_.get(e)&&this.removeItem(e),this.addItem_(new t._CacheItem(e,i,o)),this.log_("Setting key "+e),this.maxSize_>0&&this.size()>this.maxSize_){var r=this;setTimeout(function(){r.purge_.call(r)},0)}},t.prototype.clear=function(){for(var t=this.storage_.keys(),e=0;e<t.length;e++)this.removeItem(t[e]);this.log_("Cache cleared")},t.prototype.getStats=function(){return this.stats_},t.prototype.toHtmlString=function(){for(var t=this.size()+" item(s) in cache<br /><ul>",e=this.storage_.keys(),i=0;i<e.length;i++){var o=this.storage_.get(e[i]);t=t+"<li>"+o.key.toString()+" = "+o.value.toString()+"</li>"}return t+="</ul>"},t.prototype.resize=function(t){this.log_("Resizing Cache from "+this.maxSize_+" to "+t);var e=this.maxSize_;this.maxSize_=t,t>0&&(0>e||e>t)&&this.size()>t&&this.purge_(),this.log_("Resizing done")},t.prototype.purge_=function(){var t=new Array,e=Math.round(this.maxSize_*this.fillFactor_);this.maxSize_<0&&(e=this.size()*this.fillFactor_);for(var i=this.storage_.keys(),o=0;o<i.length;o++){var r=i[o],s=this.storage_.get(r);this.isExpired_(s)?this.removeItem(r):t.push(s)}if(t.length>e)for(t=t.sort(function(t,e){return t.options.priority!=e.options.priority?e.options.priority-t.options.priority:e.lastAccessed-t.lastAccessed});t.length>e;){var a=t.pop();this.removeItem(a.key)}this.log_("Purged cached")},t.prototype.addItem_=function(t,e){try{this.storage_.set(t.key,t)}catch(i){if(e)throw this.log_("Failed setting again, giving up: "+i.toString()),i;this.log_("Error adding item, purging and trying again: "+i.toString()),this.purge_(),this.addItem_(t,!0)}},t.prototype.removeItem=function(t){var e=this.storage_.remove(t);return this.log_("removed key "+t),e&&e.options&&e.options.callback&&setTimeout(function(){e.options.callback.call(null,e.key,e.value)},0),e?e.value:null},t.prototype.removeWhere=function(t){for(var e=this.storage_.keys(),i=0;i<e.length;i++){var o=e[i],r=this.storage_.get(o);t(o,r.value)===!0&&this.removeItem(o)}},t.prototype.size=function(){return this.storage_.size()},t.prototype.isExpired_=function(t){var e=(new Date).getTime(),i=!1;if(t.options.expirationAbsolute&&t.options.expirationAbsolute<e&&(i=!0),!i&&t.options.expirationSliding){var o=t.lastAccessed+1e3*t.options.expirationSliding;e>o&&(i=!0)}return i},t.prototype.log_=function(t){this.debug_&&console.log(t)};var e=this;"undefined"!=typeof module&&module.exports?module.exports=t:"function"==typeof define&&define.amd?define(function(){return t}):e.Cache=t}();
  function genKey(){var t="";for(i=0;i<5;i++)t+=Math.ceil(15*Math.random()).toString(16);return t}function waitFor(t,e,n,i,r){t[e]?n.apply(i):(r=r||0,1e3>r&&setTimeout(function(){waitFor(t,e,n,i,r+1)},0))};function getEnv(t,e){env.loaded?t.apply(e,[env]):onEnvLoad.push([e,t])}function envLoaded(){env.loaded=!0;for(var t=onEnvLoad.length;t--;)onEnvLoad[t][1].apply(onEnvLoad[t][0],[env])}function applyMethod(t,e){getEnv(function(n){var i=JSON.parse(t);if(i[0]){i[1]||(i[1]=[]);for(var r=i[1].length;r--;)if(i[1][r]._func){var o=i[1][r]._func;i[1][r]=function(){var t=Array.prototype.slice.call(arguments);t.unshift("_func"+o),e.callMethod.apply(e,t)}}else e.options.safe&&(i[1][r]=walkVar(i[1][r],!0));setTimeout(function(){if(!e.methods[i[0]])throw Error("fastXDM: Method "+i[0]+" is undefined");e.methods[i[0]].apply(e,i[1])},0)}})}function qsEncode(t){var e,n=[];for(e in t)"user"!=e&&n.push(encodeURIComponent(e)+"="+encodeURIComponent(t[e]));return n.sort(),n.join("&")}var handlers={},onEnvLoad=[],env={},fastXDM={_id:0,Server:function(t,e,n){this.methods=t||{},this.id=fastXDM._id++,this.options=n||{},this.filter=e,this.key=genKey(),this.methods["%init%"]=this.methods.__fxdm_i=function(){fastXDM.run(this.id),this.methods.onInit&&this.methods.onInit()},this.frameName="fXD"+this.key,this.server=!0,handlers[this.key]=[applyMethod,this]},Client:function(t,e){if(this.methods=t||{},this.id=fastXDM._id++,this.options=e||{},fastXDM.run(this.id),0!==window.name.indexOf("fXD"))throw Error("Wrong window.name property.");this.key=window.name.substr(3),this.caller=window.parent,handlers[this.key]=[applyMethod,this],this.client=!0,fastXDM.on("helper",function(){fastXDM.onClientStart(this)},this),getEnv(function(t){t.send(this,JSON.stringify(["%init%"]));var e=this.methods;setTimeout(function(){e.onInit&&e.onInit()},0)},this)},onMessage:function(t){if(!t.data)return!1;var e=t.data;if("string"!=typeof e&&!(e instanceof String))return!1;var n=e.substr(0,5);if(handlers[n]){var i=handlers[n][1];!i||i.filter&&!i.filter(t.origin)||handlers[n][0](t.data.substr(6),i)}},_q:{},on:function(t,e,n){this._q[t]||(this._q[t]=[]),-1==this._q[t]?e.apply(n):this._q[t].push([e,n])},run:function(t){var e=(this._q[t]||[]).length;if(this._q[t]&&e>0)for(var n=0;e>n;n++)this._q[t][n][0].apply(this._q[t][n][1]);this._q[t]=-1},waitFor:waitFor};fastXDM.Server.prototype.start=function(t,e){if(t.contentWindow)this.caller=t.contentWindow,this.frame=t,fastXDM.on("helper",function(){fastXDM.onServerStart(this)},this);else{var n=this;e=e||0,50>e&&setTimeout(function(){n.start.apply(n,[t,e+1])},100)}},fastXDM.Server.prototype.destroy=function(){handlers.splice(handlers.indexOf(this.key),1)},fastXDM.Server.prototype.append=function(t,e){var n=document.createElement("DIV");n.innerHTML="<iframe name=\""+this.frameName+"\"></iframe>";var i=n.firstChild,r=this;return setTimeout(function(){i.frameBorder="0",e&&window.jQuery.extend(i,e),t.insertBefore(i,t.firstChild),r.start(i)},0),i},fastXDM.Client.prototype.callMethod=fastXDM.Server.prototype.callMethod=function(){for(var t=Array.prototype.slice.call(arguments),e=t.shift(),n=t.length;n--;)if("function"==typeof t[n]){this.funcsCount=(this.funcsCount||0)+1;var i=t[n],r="_func"+this.funcsCount;this.methods[r]=function(){i.apply(this,arguments),delete this.methods[r]},t[n]={_func:this.funcsCount}}else this.options.safe&&(t[n]=walkVar(t[n],!1));waitFor(this,"caller",function(){fastXDM.on(this.id,function(){getEnv(function(n){n.send(this,JSON.stringify([e,t]))},this)},this)},this)},env.send=function(t,e){var n=t.frame?t.frame.contentWindow:t.caller;n.postMessage(t.key+":"+e,"*")},addEventListener?addEventListener("message",fastXDM.onMessage,!1):attachEvent("onmessage",fastXDM.onMessage),envLoaded();var xdReady=!1,XDM={remote:null,init:function(){if(this.remote)return!1;this.remote=new fastXDM.Server({onInit:function(){xdReady=!0}});var t=document.getElementById("video_result"),e=document.createElement("DIV");e.style.display="none",t.parentNode.insertBefore(e,t.nextSibling),this.remote.append(e,{src:"https://api.vk.com/fxdm_oauth_proxy.html"})}};
  // function vkApi(method, data, onload, viaxdm) {
  //   if (viaxdm || typeof XMLHttpRequest === "undefined") {
  //     xdReady ? XDM.remote.callMethod("apiCall", method, qsEncode(data || {}), function(resp) {
  //       onload(resp);
  //     }) : (XDM.init(), setTimeout(function() {
  //       vkApi(method, data, onload, 1)
  //     }, 50));

  //     return true;
  //   };

  //   var xhr = new (("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest);
  //   xhr.open("POST", "https://api.vk.com/method/" + method, true);
  //   xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  //   xhr.onreadystatechange = function() {
  //     if (xhr.readyState == 4) {
  //       if (xhr.status >= 200 && xhr.status < 300) {
  //         onload(eval("(" + xhr.responseText + ")"));
  //       } else if (xhr.status == 0) {
  //         vkApi(method, data, onload, 1);
  //       };
  //     };
  //   };
  //   xhr.send(qsEncode(data || {}));
  // };
  function vkApi(method, query, onload) {
    var _callback = function(event) {
      if (event.source != window) {
        return;
      }

      if (event.data.type && (event.data.type == "FROM_DXB_EXT")) {
        onload(event.data.response);

        window.removeEventListener("message", _callback);
      }
    };

    // window.removeEventListener("message", _callback);
    window.addEventListener("message", _callback, false);

    window.postMessage({
      type: "FROM_DXB_WEB",
      method: method,
      query: qsEncode(query || {})
    }, "*");
  }
  function vkVideo(id, callback) {
    var r = function(t) {
      return t.replace(/([\uE000-\uF8FF]|\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDDFF])/g, '');
    };

    var xhr = new (("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest);
    xhr.open("POST", "https://vk.com/al_video.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4) {
        if (xhr.status >= 200 && xhr.status < 300) {
          try {
            callback(JSON.parse(r(JSON.stringify(JSON.parse((xhr.responseText).split("<!json>")[1].split("<!>")[0]).player.params[0]))));
          } catch (e) {
            callback(null);
          };
        };
      };
    };
    xhr.send("act=show&al=1&al_ad=0&autoplay=1&force_no_repeat=1&list=&module=videocat&playlist_id=cat_featured&show_next=1&video="+id);

    return xhr;
  };
  var cache = new Cache(-1, false, new Cache.LocalStorageCacheStorage);

  function parseVideo(video, prx) {
    loaderTimeout && clearTimeout(loaderTimeout);

    var video_item = window.jQuery("<div>").addClass("video_item");
    var video_photo = window.jQuery("<img />").addClass("video_photo").attr({src: psr(video.photo_800 || video.photo_320 || video.photo_130)});
    var video_info = window.jQuery("<div>").addClass("video_info");
    var video_title = window.jQuery("<div>").addClass("video_title").text(video.title);
    var video_duration = window.jQuery("<div>").addClass("video_duration").html("<i class=\"ico-time\"></i> " + formatTime(video.duration));
    var video_files = window.jQuery("<div>").addClass("video_files");

    window.jQuery("#video_result").html(video_item.append(video_photo, video_info.append(video_title, video_duration, video_files)));

    if (video.files && video.files.external) {
      video_files.html("<a class=\"disabled\">External Video</a>");
    } else if (prx == -1) {
      var videoId = video.videos.split("_");

      for (var k in video.files) {
        var f = video.files[k].split(".");

        var link = window.jQuery("<a>").attr({target: "_blank", download: video.title + "." + f[0] + ".mp4"}).html(f[0] + "p").on("mousedown", function() {
          this.href = window.jQuery(this).data("link");
          return true;
        }).on("mouseout", function() {
          this.href = "";
        });

        link.data("link", location.protocol + "//" + getServer() + "/videos/" + videoId[0] + "/" + videoId[1] + "/" + f[0] + ".mp4?extra=" + f[1] + "&dl=1");

        video_files.append(link);
      };

      if (!video.files.mp4_720 && !video.files.mp4_1080) {
        video_files.append("<a target=\"_blank\" class=\"limited\" href=\"https://chrome.google.com/webstore/detail/daxab-ultimate/enakmcmeealkdoeindgoeogldodhdeda?hl=en\">1080p</a>");
      };
    } else if (prx == 1) {
      if (video.files.flv_320) {
        video_files.html("<a class=\"disabled\">flv</a>");
      };

      if (video.files.mp4_240 || video.files.mp4_360 || video.files.mp4_480 || video.files.mp4_720 || video.files.mp4_1080) {
        window.jQuery.each(video.files, function(key, value) {
          var vm = key.match(/_(240|360|480|720|1080)/);

          if (key.match(/^mp4_/i)) {
            var last_res = 0;

            if (vm && videoParams.q_key[vm[1]] && key.match(/^mp4_/i)) {
              var url = parse_url(value);
              var link = window.jQuery("<a>").attr({target: "_blank", download: video.title + "." + vm[1] + ".mp4"}).html(vm[1] + "p").on("mousedown", function() {
                this.href = window.jQuery(this).data("link");
                return true;
              }).on("mouseout", function() {
                this.href = "";
              });

              link.data("link", location.protocol + "//" + getServer() + "/" + url.host + url.path + "?" + url.query + "&extra_key=" + videoParams.q_key[vm[1]] + "&videos=" + videoParams.id + "&dl=1");

              video_files.append(link);
              last_res = parseInt(vm[1]);
            } else if (!videoParams.q_key[vm[1]] && last_res == 720) {
              video_files.append("<a target=\"_blank\" class=\"limited\" href=\"https://chrome.google.com/webstore/detail/daxab-ultimate/enakmcmeealkdoeindgoeogldodhdeda?hl=en\">" + vm[1] + "p</a>");
            };
          }
        });
      };
    } else {
      if (video.files.flv_320) {
        var link = window.jQuery("<a>").attr({target: "_blank", download: video.title + ".flv"}).html("flv").on("mousedown", function() {
          this.href = window.jQuery(this).data("link");
          return true;
        }).on("mouseout", function() {
          this.href = "";
        });

        link.data("link", video.files.flv_320);

        video_files.append(link);
      };

      if (video.files.mp4_240 || video.files.mp4_360 || video.files.mp4_480 || video.files.mp4_720 || video.files.mp4_1080) {
        window.jQuery.each(video.files, function(key, value) {
          var vm = key.match(/(240|360|480|720|1080)/);
          var link = window.jQuery("<a>").attr({target: "_blank", download: video.title + "." + vm[0] + ".mp4"}).html(vm[0] + "p").on("mousedown", function() {
            this.href = window.jQuery(this).data("link");
            return true;
          }).on("mouseout", function() {
            this.href = "";
          });

          link.data("link", value);

          video_files.append(link);
        });
      };
    };
  };

  var extEnabled = getCookie("ext_on") ? 1 : 0; setCookie("ext_on", "0", {expires: -3600});

  if (extEnabled && window.daxabExt !== 3 && !!window.chrome && !!window.chrome.webstore && !!window.CSS) {
    var ext_ad = parseInt(getCookie("ext_ad")) || 0;

    if (!ext_ad) {
      var link  = document.createElement("link");
      link.rel  = "stylesheet";
      link.type = "text/css";
      link.href = "https://daxab.com/css/ext.css?" + 3;
      link.media = "all";

      window.jQuery("head").append(link);

      window.jQuery(link).on("load", function(event) {
        var ext = window.jQuery("<a>").addClass("extension").attr({
          href: "https://chrome.google.com/webstore/detail/daxab-ultimate/enakmcmeealkdoeindgoeogldodhdeda?hl=en",
          target: "_blank"
        }).css({
          position: "fixed",
          right: 0,
          bottom: 14
        }).hide(),
        extClose = window.jQuery("<div>").addClass("extension-close").html("&times;"), extImg = window.jQuery("<div>").addClass("extension-img"),
        extText = window.jQuery("<div>").addClass("extension-text").html("<span style=\"color: #fdd42a;\">Free Chrome Extension </span><br>To increase speed and watch in 1080p");

        ext.append(extClose).append(extImg).append(extText);

        extClose.on("click", function(event) {
          setCookie("ext_ad", "1", {expires: 1800});
          ext.fadeOut(300, function(argument) {
            ext.remove();
          });
          event.preventDefault();
          return false;
        });

        window.jQuery("body").prepend(ext);

        ext.fadeIn(500);
      }).on("error", function(event) {
        console.error("Can not load ext.css");
      });
    };
  };

  if (window.videoParams) {
    var videoExt = (getCookie("video_ext") || "").split(":");

    setCookie("video_ext", "", {expires: -3600});

    loaderTimeout = setTimeout(function() {
      window.jQuery("#video_result").html("<div class=\"video_data_load\"><div class=\"sk-fading-circle\"><div class=\"sk-circle1 sk-circle\"></div><div class=\"sk-circle2 sk-circle\"></div><div class=\"sk-circle3 sk-circle\"></div><div class=\"sk-circle4 sk-circle\"></div><div class=\"sk-circle5 sk-circle\"></div><div class=\"sk-circle6 sk-circle\"></div><div class=\"sk-circle7 sk-circle\"></div><div class=\"sk-circle8 sk-circle\"></div><div class=\"sk-circle9 sk-circle\"></div><div class=\"sk-circle10 sk-circle\"></div><div class=\"sk-circle11 sk-circle\"></div><div class=\"sk-circle12 sk-circle\"></div></div></div>");
    }, 2000);

    var videoKey = "vkideo" + videoParams.id + "_" + videoParams.i_key;
    var video = cache.getItem(videoKey);

    if (video) {
      window.name = "";
      parseVideo(video);

      return;
    };

    if (window.name) {
      try {
        var data = JSON.parse(window.name);

        if (data.files) {
          video = data;
          cache.setItem(videoKey, video, {expirationSliding: 80000});
          parseVideo(video);

          return;
        } else {
          var titleDiv = document.createElement("DIV");
          var j = 0, player = JSON.parse(data.player);
          var keys = ["url240", "url360", "url480", "url720", "url1080", "cache240", "cache360", "cache480", "cache720", "cache1080"];

          titleDiv.innerHTML = player.md_title;

          video = {
            title: titleDiv.innerHTML,
            duration: player.duration,
            photo_320: player.jpg,
            files: {}
          };

          for (var i = 0; i < keys.length; i++) {
            var url = player[keys[i]];

            if (url) {
              video.files["mp4_" + keys[i].match(/^(url|cache)(240|360|480|720|1080)$/i)[2]] = url;
            }
            j++;
          };

          if (j > 0) {
            cache.setItem(videoKey, video, {expirationSliding: 80000});
            parseVideo(video);

            return;
          };
        };
      } catch (e) {};

      window.name = "";
    };

    if (extEnabled && window.daxabExt == 4) {
      var videoKey = "vkideo" + videoParams.id + "_" + videoParams.i_key;
      var _video = cache.getItem(videoKey);

      if (_video && _video.files) {
        loaderTimeout && clearTimeout(loaderTimeout);
        parseVideo(_video);

        return;
      } else {
        vkApi("video.get", {
          access_token: videoExt[3],
          videos: videoExt[0],
          v: "5.44",
          sig: videoExt[1]
        }, function(result) {
          loaderTimeout && clearTimeout(loaderTimeout);

          if (result.response && result.response.items) {
            if (result.response.items.length) {
              parseVideo(result.response.items[0]);
              cache.setItem(videoKey, result.response.items[0], {expirationSliding: 82800});
              return;
            };
          };

          window.jQuery("#video_result").html("<p class=\"video_error\">Video not found</p>");
        });

        return;
      };
    }

    if (videoParams.files) {
      loaderTimeout && clearTimeout(loaderTimeout);

      var videoId = videoParams.id.split("_");

      parseVideo({
        videos: videoParams.id,
        title: videoParams.title,
        description: videoParams.description,
        duration: videoParams.duration,
        photo_320: "//" + getServer() + "/videos/" + videoId[0] + "/" + videoId[1] + "/thumb.jpg?extra="+videoParams.thumb_extra,
        files: videoParams.files
      }, -1);

      return;
    } else {
      var videoKey = "video" + videoParams.id + "_" + videoParams.c_key;
      var _video = cache.getItem(videoKey);

      if (_video) {
        parseVideo(_video, 1);
      } else {
        if (videoParams.sig) {
          window.jQuery.ajax({
            url: "//" + getServer() + "/method/video.sig",
            dataType: "jsonp",
            data: {
              token: videoParams.token,
              videos: videoParams.id,
              extra_key: videoParams.e_key,
              ckey: videoParams.c_key,
              sig: videoParams.sig
            },
            success: function(result) {
              loaderTimeout && clearTimeout(loaderTimeout);

              if (result.response) {
                if (result.response.items.length) {
                  cache.setItem(videoKey, result.response.items[0], {expirationSliding: 60});
                  parseVideo(result.response.items[0], 1);
                } else {
                  window.jQuery("#video_result").html("<p class=\"video_error\">Video not found</p>");
                };
              } else {
                window.jQuery("#video_result").html("<p class=\"video_error\">Video not found</p>");
              };
            }
          });
        } else {
          window.jQuery.ajax({
            url: "//" + getServer() + "/method/video.get",
            dataType: "json",
            data: {
              credentials: videoParams.credentials,
              token: videoParams.token,
              videos: videoParams.id,
              extra_key: videoParams.e_key,
              ckey: videoParams.c_key
            },
            success: function(result) {
              loaderTimeout && clearTimeout(loaderTimeout);

              if (result.response) {
                if (result.response.items.length) {
                  cache.setItem(videoKey, result.response.items[0], {expirationSliding: 60});
                  parseVideo(result.response.items[0], 1);
                } else {
                  window.jQuery("#video_result").html("<p class=\"video_error\">Video not found</p>");
                };
              } else {
                window.jQuery("#video_result").html("<p class=\"video_error\">Video not found</p>");
              };
            }
          });
        };
      };
    };
  };
})();