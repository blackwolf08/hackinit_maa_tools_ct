import 'package:flutter/material.dart';
import 'package:flutter_webview_plugin/flutter_webview_plugin.dart';
import 'package:react_maa/webentry.dart';

class WebViewInFlutter extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return WebviewScaffold(
      url: 'https://maatools.netlify.com',
      hidden: true,
      appBar: AppBar(
        elevation: 
        2.0,
        backgroundColor: new Color(0xFFEEEEEE),
        title: Text('MAA', 
         style: TextStyle(
            color: new Color(0xFF999999),
            fontWeight: FontWeight.w700,
            fontSize: 30.0
         )),
         actions: <Widget>[
           Container(
             margin: EdgeInsets.only(right:8.0),
             child: Row(
               mainAxisAlignment: MainAxisAlignment.center,
               crossAxisAlignment: CrossAxisAlignment.center,
               children: <Widget>[
                 new RaisedButton(
                   color: Colors.white,
                   child: new Text("My Profile"),
                   textColor: Colors.pink,
                   onPressed: () => Navigator.pushReplacement(
                     context,
                     MaterialPageRoute(builder: (context) => WebView())
                   ),
                 )
               ],
             ),
           )
         ],
      )

    );
  }
}