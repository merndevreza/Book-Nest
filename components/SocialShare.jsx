"use client";
import { cn } from "@/lib/utils";
import { Facebook, Linkedin, Twitter } from "lucide-react";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
} from "next-share";
const SocialShare = ({ className, url, hashtag, quote }) => {
  return (
    <ul
      className={cn(
        `flex items-center justify-center md:justify-end gap-2 text-2xl ${className}`
      )}
    >
      <li>
        <FacebookShareButton
          url={url}
          quote={quote ?? null}
          hashtag={hashtag ?? "#booknest"}
        >
          <Facebook size={20} />
        </FacebookShareButton>
      </li>
      <li>
        <TwitterShareButton
          url={url}
          quote={quote ?? null}
          hashtag={hashtag ?? "#booknest"}
        >
          <Twitter size={20} />
        </TwitterShareButton>
      </li>
      <li>
        <LinkedinShareButton
          url={url}
          quote={quote ?? null}
          hashtag={hashtag ?? "#booknest"}
        >
          <Linkedin size={20} />
        </LinkedinShareButton>
      </li>
    </ul>
  );
};

export default SocialShare;
