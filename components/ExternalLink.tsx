import { Link } from "expo-router";
import * as WebBrowser from "expo-web-browser";
import React, { type ReactElement } from "react";
import { Platform } from "react-native";
import PropTypes from "prop-types";

export function ExternalLink(
  props: React.ComponentProps<typeof Link>
): ReactElement {
  return (
    <Link
      hrefAttrs={{
        // On web, launch the link in a new tab.
        target: "_blank",
      }}
      {...props}
      onPress={(e) => {
        if (Platform.OS !== "web") {
          // Prevent the default behavior of linking to the default browser on native.
          e.preventDefault();
          // Open the link in an in-app browser.
          void WebBrowser.openBrowserAsync(props.href as string);
        }
      }}
    />
  );
}

ExternalLink.propTypes = {
  href: PropTypes.string.isRequired,
};
