import { Metadata } from "next";
import Link from "next/link";
import { termsOfUseSchema } from "@/utils/jsonLdSchemas";

export const metadata: Metadata = {
  title: "Terms of Use - Cap&apos;t Loui",
  description: "Terms and conditions for using our services",
};

export default function TermsOfUsePage() {
  return (
    <>
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(termsOfUseSchema),
        }}
      />

      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-primary mb-4 uppercase">
                Terms of Use
              </h1>
              <p className="text-xl text-gray-600 mb-4">
                Terms and conditions for using our services
              </p>
              <div className="flex justify-center items-center gap-4 text-sm text-gray-500">
                <span>Last Updated: 28 August 2025</span>
                <span>Version: 1.0</span>
              </div>
            </div>

            
            <div className="text-black p-8 rounded-lg">
              <div className="prose prose-lg max-w-none markdown-content">
                <p>
                  These Website Terms of Use (or &quot;Terms&quot;) form an
                  agreement between you (&quot;you&quot; or &quot;your&quot;)
                  and Cap&apos;t Loui LLC (&quot;Cap&apos;t Loui,&quot;
                  &quot;we,&quot; &quot;us&quot; or &quot;our&quot;) and govern
                  your use of{" "}
                  <a
                    href="http://www.captloui.com"
                    className="text-blue-500 underline"
                  >
                    www.captloui.com
                  </a>{" "}
                  and any other website owned or operated by Cap&apos;t Loui
                  that links to these terms (the &quot;Site&quot;) and all
                  features, content, functionality, and tools made available on
                  or through the Site (collectively with the Site, the
                  &quot;Services&quot;).
                </p>

                <div className="p-4 my-6">
                  <p className="text-sm font-medium">
                    <strong>
                      READ THESE TERMS CAREFULLY, AS THEY CONTAIN TERMS AND
                      CONDITIONS THAT IMPACT YOUR RIGHTS, OBLIGATIONS, AND
                      REMEDIES IN CONNECTION WITH THE SERVICES, INCLUDING AN
                      AGREEMENT TO ARBITRATE FOR ANY DISPUTE RESOLUTION UNDER
                      SECTION 10 BELOW.
                    </strong>
                  </p>
                </div>

                <h2>ACCEPTANCE</h2>
                <p>
                  Please read these Terms carefully before you access and use
                  the Services.{" "}
                  <strong>
                    BY ACCESSING AND USING THE SERVICES YOU ACCEPT AND AGREE TO
                    BE BOUND AND ABIDE BY THESE TERMS.
                  </strong>{" "}
                  If you do not agree to these Terms, you must (i) not access or
                  use the Services, or (ii) discontinue any access or use of the
                  Services. Your failure to comply with the Terms may result in
                  the suspension or termination of access to the Site and may
                  subject you to civil and criminal penalties.
                </p>

                <h2>CHANGES TO THE TERMS</h2>
                <p>
                  Cap&apos;t Loui reserves the right, in its sole discretion, to
                  amend the Terms, at any time and without prior notice. All
                  changes are effective immediately when we post them unless we
                  expressly specify otherwise. In any event, no changes will
                  apply retroactively as to any claims existing prior to the
                  &quot;last updated&quot; date. If we choose to amend the
                  Terms, we will update the &quot;Last Updated Date&quot; at the
                  top of the Terms and post the updated version. By continuing
                  to use the Site after we have posted an updated version of the
                  Terms, you are affirming that you agree to be bound by the
                  amended Terms. You are expected to check this page, so you are
                  aware of any changes, as they are binding on you. If there are
                  material changes to these Terms, we may also reserve the right
                  to provide notice of said changes in other alternative
                  manners, such as posting said changes to the Sites and/or
                  communicating said changes via e-mail or other communication
                  channel.
                </p>

                <h2>ACCESS AND CHANGES TO THE SITE</h2>
                <ul>
                  <li>
                    Subject to your compliance with the Terms, Cap&apos;t Loui
                    grants you a limited, revocable, non-exclusive,
                    non-transferable, non-assignable, and non-sublicensable
                    right to access and use the Site for your own personal or
                    internal business use only, and not for resale or
                    third-party distribution. In order to use the Site, you must
                    have internet access, otherwise, you will not be able to use
                    some or all of the Site.
                  </li>
                </ul>

                <p>
                  Cap&apos;t Loui reserves the right, in its sole discretion, to
                  modify or discontinue offering the Site, or to impose limits
                  on your use of the Site, or any features, functionality, or
                  tools thereof, in whole or in part, at any time, for any
                  reason or no reason, with or without notice to you. You agree
                  that Cap&apos;t Loui has no obligation to provide any updates
                  or to continue to provide or enable any particular Site
                  features, functionality, tools, or content and, to the maximum
                  extent permitted by applicable law, will not be liable with
                  respect to any such modifications, discontinuance, or
                  deletions. The Site is controlled and operated within the
                  United States and is not intended for use outside of the
                  United States.
                </p>

                <h2>COOKIES</h2>
                <p>
                  Our Site incorporates the use of third-party technologies,
                  including cookies and other tracking technologies to enhance
                  user experience, provide advertising and marketing services,
                  and to analyze performance and traffic on our Site
                  (&quot;Cookies&quot;). Cookies and related information
                  collected about your use of our Site may be shared with our
                  social media, advertising, and analytics partners. For more
                  information about our use of Cookies and how we may share
                  information with third parties, please refer to our{" "}
                  <Link
                    href="/privacy-policy"
                    className="text-blue-500 hover:underline italic"
                  >
                    privacy policy
                  </Link>
                  .
                </p>

                <h2>SMS/TEXT MESSAGES AND MARKETING COMMUNICATION CONSENT</h2>
                <p>
                  By providing your phone number and opting in to receive
                  marketing messages, including via SMS or text messages, from
                  us. You expressly consent to receive marketing and
                  non-marketing calls and text messages from or on behalf of
                  Cap&apos;t Loui, including those made using an automatic
                  telephone dialing system (auto-dialer), prerecorded or
                  artificial voice messages, or other automated technology, at
                  the phone number you provide. Your consent to receive such
                  messages is not a condition of any purchase. Message and data
                  rates may apply. The frequency of messages may vary. You may
                  opt out of receiving SMS or text messages at any time by
                  replying STOP to any message you receive from us, or by
                  following the instructions provided in the message. For help
                  or more information, reply HELP or contact our customer
                  service.
                </p>

                <h2>USER CONDUCT GUIDELINES</h2>
                <p>
                  You are not authorized to access or use the Site if you are
                  under 18; if you are a person barred from receiving services
                  under the laws of the United States or other applicable
                  jurisdiction; or for any other purposes that are not expressly
                  permitted by the Terms or which violate applicable law.
                </p>

                <p>Further, you may not:</p>
                <ul>
                  <li>
                    copy, distribute, share, publish, use or store, or prepare
                    derivative works from any content on the Site covered by any
                    copyrights, trademark, patent, or other intellectual
                    property right belonging to Cap&apos;t Loui or a third
                    party, except with prior express permission of Cap&apos;t
                    Loui or entity party holding the rights to license such use;
                  </li>
                  <li>
                    access, search, collect information from, or otherwise
                    interact with the Site by &quot;scraping,&quot;
                    &quot;crawling&quot; or &quot;spidering&quot; the Site;
                  </li>
                  <li>
                    use, display, mirror or frame the Site, or any feature,
                    functionality, tool or content of the Site, Cap&apos;t
                    Loui&apos;s name, any Cap&apos;t Loui trademark, logo or
                    other proprietary information;
                  </li>
                  <li>
                    interfere with, disrupt, damage or compromise the Site or
                    our systems or the access of any user, host or network in
                    any way;
                  </li>
                  <li>
                    attempt to decipher, decompile, disassemble or reverse
                    engineer any of the code or software used to provide the
                    Site;
                  </li>
                  <li>otherwise abuse the Site or breach the Terms; or</li>
                  <li>
                    attempt to do any of the foregoing, or advocate, encourage
                    or assist any third party in doing any of the foregoing.
                  </li>
                </ul>

                <p>
                  Cap&apos;t Loui reserves the right to investigate and
                  prosecute violations of any and all reports, complaints and
                  claims, or otherwise suspected misconduct or violations of the
                  law to the fullest extent of the law, and to monitor and/or
                  disable access to or use of the Site by any user.
                </p>

                <h2>INTELLECTUAL PROPERTY OWNERSHIP</h2>
                <p>
                  The Site is protected by copyright, trademark, patent, and
                  other laws of the applicable jurisdiction and throughout the
                  world. You acknowledge and agree that the Site, and all
                  intellectual property rights therein, are the exclusive
                  property of Cap&apos;t Loui and its licensors. You will not
                  remove, alter or obscure any copyright, trademark, service
                  mark, patent marking, or other proprietary rights notices
                  incorporated in or accompanying the Site, and you may not use
                  the trade names, logos, and other trademarks and service marks
                  associated with Cap&apos;t Loui without our prior written
                  consent.
                </p>

                <p>
                  You may not use, copy, reproduce, distribute, license, sell,
                  transfer, publish, post, publicly display, publicly perform,
                  transmit, broadcast, adapt, modify, prepare derivative works
                  based upon, or otherwise exploit any features, functionality
                  or tools of, the Site in any form or by any means, or
                  sublicense the rights granted in the Terms.
                </p>

                <p>
                  No licenses or rights are granted to you by implication or
                  otherwise under any intellectual property rights owned or
                  controlled by Cap&apos;t Loui or its licensors, except for the
                  revocable licenses and rights expressly granted in the Terms.
                  All rights not expressly granted to you by the Terms are
                  hereby reserved to Cap&apos;t Loui and its licensors.
                </p>

                <p>
                  If you choose to provide feedback, comments, ideas, and
                  suggestions for improvements, enhancements, and modifications
                  to the Site (&quot;Feedback&quot;), you acknowledge and agree
                  that all Feedback you give us (i) will be treated as
                  non-confidential, and (ii) will be the sole and exclusive
                  property of Cap&apos;t Loui. You hereby irrevocably transfer
                  and assign to Cap&apos;t Loui all of your right, title, and
                  interest in and to, and waive any moral rights you may have
                  in, all such Feedback.
                </p>

                <h2>THIRD-PARTY SERVICES; NO ENDORSEMENTS</h2>
                <p>
                  The Site may provide links to third-party websites, resources
                  or services. Links to such websites, resources, or services do
                  not imply any endorsement by Cap&apos;t Loui of such websites,
                  resources, or services or the content, products, or services
                  available on or through such websites, resources, or services.
                  You acknowledge sole responsibility for and assume all risk
                  arising from your use of any such websites, resources, or
                  services or the content, products, or services available on or
                  through such websites or services. We are not responsible or
                  liable for any damage or harm resulting from your interactions
                  with such websites or services, or the content, products, or
                  services available on or through such websites or services.
                </p>

                <h2>DISCLAIMERS, LIMITATION OF LIABILITY & INDEMNIFICATION</h2>
                <p>
                  THE SITE IS PROVIDED &quot;AS IS&quot; AND &quot;AS
                  AVAILABLE&quot; WITHOUT WARRANTY OR CONDITIONS OF ANY KIND,
                  EXPRESS OR IMPLIED. TO THE MAXIMUM EXTENT NOT PROHIBITED BY
                  APPLICABLE LAW, CAP&apos;T LOUI EXPRESSLY DISCLAIMS ANY AND
                  ALL WARRANTIES, WHETHER EXPRESS, IMPLIED, ARISING OUT OF
                  COURSE OF DEALING OR USAGE OF TRADE, INCLUDING WARRANTIES OF
                  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE,
                  NON-INFRINGEMENT OR TITLE OR RIGHTFUL CLAIM, WARRANTIES AS TO
                  THE RELIABILITY OR AVAILABILITY OF THE SITE, OR THAT USE OF
                  THE SITE WILL BE UNINTERRUPTED OR ERROR-FREE, WARRANTIES AS TO
                  THE COMPLETENESS, ACCURACY OR TIMELINESS OF ANY CONTENT.
                </p>

                <p>
                  YOU ACKNOWLEDGE AND AGREE THAT ACCESSING AND USING THE SITE IS
                  DONE AT YOUR OWN DISCRETION AND RISK, AND YOU HEREBY RELEASE
                  CAP&apos;T LOUI AND WAIVE ANY AND ALL CLAIMS AND CAUSES OF
                  ACTION WITH RESPECT TO ANY DAMAGES CAUSED BY ANY OF THE
                  FOREGOING. WITHOUT LIMITING THE FOREGOING, CAP&apos;T LOUI
                  DISCLAIMS ANY AND ALL LIABILITY RELATED TO YOUR USE OF OR
                  INABILITY TO USE THE SITE. IN NO EVENT WILL CAP&apos;T LOUI BE
                  LIABLE FOR ANY (A) DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
                  EXEMPLARY, PUNITIVE, OR CONSEQUENTIAL DAMAGES OF ANY KIND, OR
                  (B) DAMAGES FOR LOST REVENUES OR PROFITS, LOSS OF OPPORTUNITY,
                  LOSS OF DATA OR LOSS OF GOODWILL, SERVICE INTERRUPTION,
                  COMPUTER DAMAGE OR SYSTEM FAILURE, OR FOR ANY DAMAGES FOR
                  PERSONAL OR BODILY INJURY OR EMOTIONAL DISTRESS ARISING OUT OF
                  OR IN CONNECTION WITH THIS AGREEMENT, WHETHER BASED IN
                  WARRANTY, CONTRACT, TORT (INCLUDING NEGLIGENCE) OR ANY OTHER
                  LEGAL THEORY, AND WHETHER OR NOT CAP&apos;T LOUI HAS BEEN
                  INFORMED OF THE POSSIBILITY OF SUCH DAMAGE, EVEN IF A LIMITED
                  REMEDY SET FORTH HEREIN IS FOUND TO HAVE FAILED OF ITS
                  ESSENTIAL PURPOSE.
                </p>

                <p>
                  THESE LIMITATIONS AND EXCLUSIONS APPLY TO YOU ONLY TO THE
                  EXTENT PERMITTED BY APPLICABLE LAW. IN THE EVENT THAT THE
                  FOREGOING LIMITATION OF LIABILITY IS DETERMINED BY A COURT OF
                  COMPETENT JURISDICTION TO BE UNENFORCEABLE, CAP&apos;T
                  LOUI&apos;S AGGREGATE LIABILITY ARISING OUT OF OR IN
                  CONNECTION WITH THIS AGREEMENT SHALL BE LIMITED TO TEN U.S.
                  DOLLARS (US$10).
                </p>

                <p>
                  To the maximum extent not prohibited by applicable law, you
                  agree to release, defend, indemnify, and hold Cap&apos;t Loui
                  and its affiliates, licensors, and service providers harmless
                  from and against any claims, liabilities, damages, losses,
                  costs, and expenses, or any other injuries, losses, or damages
                  (whether compensatory, direct, incidental, consequential, or
                  otherwise) of any kind, and including reasonable legal fees
                  and litigation expenses and costs, arising out of or relating
                  to or in any way connected with your access to or use of the
                  Site, your breach of the Terms, or your gross negligence or
                  willful misconduct.
                </p>

                <h2>DISPUTE RESOLUTION AND GOVERNING LAW</h2>

                <h3>Disputes</h3>
                <p>
                  The terms of this Section 16 shall apply to all Disputes
                  between you and Cap&apos;t Loui. For the purposes of this
                  Section, &quot;Dispute&quot; shall mean any dispute, claim,
                  controversy or action between you and Cap&apos;t Loui arising
                  under or relating to your use of the Services, this Agreement,
                  or any other transaction involving you and Cap&apos;t Loui,
                  whether in contract, warranty, misrepresentation, fraud, tort,
                  intentional tort, statute, regulation, ordinance, or any other
                  legal or equitable basis, and shall be interpreted to be given
                  the broadest meaning allowable under law. YOU AND CAP&apos;T
                  LOUI AGREE THAT &quot;DISPUTE&quot; AS DEFINED IN THIS
                  AGREEMENT SHALL NOT INCLUDE ANY CLAIM OR CAUSE OF ACTION BY
                  CAP&apos;T LOUI FOR: (1) TRADE SECRET MISAPPROPRIATION; (2)
                  PATENT INFRINGEMENT; (3) COPYRIGHT INFRINGEMENT OR MISUSE; (4)
                  TRADEMARK INFRINGEMENT OR DILUTION; OR (5) ANY OTHER CLAIM FOR
                  WHICH INJUNCTIVE RELIEF IS APPROPRIATE IN THE SOLE DISCRETION
                  OF CAP&apos;T LOUI.
                </p>

                <h3>Opt-Out</h3>
                <p>
                  You may elect to opt-out (exclude yourself) from the final,
                  binding individual arbitration procedure and waiver of class
                  and representative proceedings specified in this section by
                  sending a written letter to Cap&apos;t Loui at Contact Us
                  within thirty (30) calendar days of your initial agreement to
                  this Agreement (including your first use of the Services) that
                  specifies: (1) your name; (2) your mailing address; (3) and
                  your request to be excluded from the final, binding individual
                  arbitration procedure and waiver of class and representative
                  proceedings specified in this Section. In the event that you
                  opt-out consistent with the procedures set forth above, all
                  other terms of this Agreement shall continue to apply.
                </p>

                <h3>Dispute Notice</h3>
                <p>
                  In the event of a Dispute, you or Cap&apos;t Loui must first
                  send to the other party a notice of the Dispute that shall
                  include a written statement that sets forth the name, address,
                  and contact information of the party giving it, the facts
                  giving rise to the Dispute, and the relief requested (the
                  &quot;Dispute Notice&quot;). The Dispute Notice to Cap&apos;t
                  Loui must be addressed to 73 Dewey St, Garfield, NJ 07026
                  (&quot;Cap&apos;t Loui Notice Address&quot;). The Dispute
                  Notice to you will be sent by certified mail to the most
                  recent address we have on file or otherwise in our records for
                  you, or via email if we do not have any such address on file.
                  If Cap&apos;t Loui and you do not reach an agreement to
                  resolve the Dispute within sixty (60) calendar days after the
                  Dispute Notice is received, you or Cap&apos;t Loui may proceed
                  to mediation as articulated in this Section. You and
                  Cap&apos;t Loui will work in good faith to schedule the
                  informal conference at a mutually convenient time. If you are
                  represented by counsel, your counsel may participate in the
                  informal dispute resolution conference, but you shall also
                  fully participate in such discussions. The arbitrator may
                  dismiss any arbitration brought without first proceeding
                  through the informal dispute resolution conference.
                </p>

                <h3>Mediation</h3>
                <p>
                  In the event the parties cannot resolve the Dispute via the
                  informal dispute resolution conference, the Dispute must first
                  be submitted to non-binding mediation before a neutral third
                  party before it may proceed to arbitration. Selecting the
                  mediator, the appropriate terms for mediation (including
                  costs), and a date for mediation shall be negotiated in good
                  faith between the parties. The administrative fees associated
                  with mediation shall be negotiated between the parties, but
                  you will not be required to pay any such fees that exceed
                  those fees you would be required to pay if proceeding in a
                  court of law. Such fees also will not include attorneys&apos;
                  fees and costs, if any, unless awarded during mediation. If
                  the parties cannot agree to appropriate terms concerning
                  mediation, the parties shall be entitled to proceed with an
                  arbitration proceeding pursuant to this section.
                </p>

                <h3>Binding Arbitration</h3>
                <p>
                  In the event mediation is unsuccessful, you and Cap&apos;t
                  Loui agree: (1) to arbitrate all Disputes between you and
                  Cap&apos;t Loui pursuant to the provision of this Agreement;
                  (2) this Agreement memorializes a transaction in interstate
                  commerce; (3) the Federal Arbitration Act (9 U.S.C. § 1, et
                  seq.) governs the interpretation and enforcement of this
                  Section (notwithstanding the choice-of-law provision contained
                  herein); and (4) this Section shall survive termination in
                  this Agreement.
                </p>

                <h3>Small Claims Court</h3>
                <p>
                  Notwithstanding the foregoing, you may bring an individual
                  action in the small claims court of your state, municipality,
                  province or territory if the action is within that
                  court&apos;s jurisdiction and is pending only in that court.
                </p>

                <h3>WAIVER OF CLASS ACTIONS AND CLASS ARBITRATIONS</h3>
                <p>
                  YOU AND CAP&apos;T LOUI AGREE THAT EACH PARTY MAY BRING
                  DISPUTES AGAINST THE OTHER PARTY IN AN INDIVIDUAL CAPACITY,
                  AND NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY PURPORTED CLASS
                  OR REPRESENTATIVE PROCEEDING, INCLUDING WITHOUT LIMITATION
                  FEDERAL OR STATE CLASS ACTIONS, OR CLASS ARBITRATIONS.
                  ACCORDINGLY, UNDER THE ARBITRATION PROCEDURES OUTLINED IN THIS
                  SECTION, AN ARBITRATOR SHALL NOT COMBINE OR CONSOLIDATE MORE
                  THAN ONE PARTY&apos;S CLAIMS WITHOUT THE WRITTEN CONSENT OF
                  ALL AFFECTED PARTIES TO AN ARBITRATION PROCEEDING. WITHOUT
                  LIMITING THE GENERALITY OF THE FOREGOING, YOU AND CAP&apos;T
                  LOUI AGREE THAT NO DISPUTE SHALL PROCEED BY WAY OF CLASS
                  ARBITRATION WITHOUT THE WRITTEN CONSENT OF ALL AFFECTED
                  PARTIES.
                </p>

                <h3>MASS ACTION WAIVER</h3>
                <p>
                  You and Cap&apos;t Loui agree that any Dispute between you
                  shall be resolved only in an individual arbitration pursuant
                  to this Section. You and Cap&apos;t Loui expressly waive the
                  right to have any dispute, claim, or controversy brought,
                  heard, administered, resolved, or arbitrated as a Mass Action,
                  as defined below, and neither an arbitrator nor an arbitration
                  provider shall have any authority to hear, arbitrate, or
                  administer any Mass Action to award relief to anyone but the
                  individual in arbitration, unless otherwise provided in this
                  section. &quot;Mass Action&quot; includes instances in which
                  you or Cap&apos;t Loui are represented by a law firm or
                  collection of law firms that has filed 25 or more arbitration
                  demands of a substantially similar nature against the other
                  party within 180 days of the arbitration demand filed on you
                  or Cap&apos;t Loui&apos;s behalf, and the law firm or
                  collection of law firms seek to simultaneously or collectively
                  administer and/or arbitrate all arbitration demands in the
                  aggregate. Notwithstanding this section, nothing prevents you
                  or Cap&apos;t Loui from participating in a mass settlement of
                  claims.
                </p>

                <h3>Special Master Appointment</h3>
                <p>
                  In the event there is a dispute concerning the Mass Action
                  Waiver, the parties agree to resolve such dispute before a
                  Special Master appointed by the arbitration provider and
                  agreed to between the parties. The Special Master shall have
                  authority to resolve disputes concerning: (i) filing fees owed
                  with respect to any Mass Action; (ii) any dispute regarding
                  whether this arbitration agreement has been followed; (iv)
                  whether claimants are barred from proceeding with a Mass
                  Action; (v) any dispute relating to the representation of the
                  same claimant by multiple law firms; (vi) any dispute
                  regarding discovery common to all claims; and (vii) any
                  disputes regarding legal or factual issues common to all
                  claims. If the Special Master determines you violated the Mass
                  Action Waiver, either party shall have the opportunity to
                  opt-out of arbitration within 30 days of the arbitrator&apos;s
                  decision. You may opt-out of arbitration by providing a
                  written notice [INSERT E-MAIL]. Cap&apos;t Loui may opt-out of
                  arbitration by sending written notice of its intention to the
                  arbitration provider and to you or your attorney, agent, or
                  representative. For the avoidance of doubt, the ability to
                  opt-out of arbitration at this stage in the proceedings only
                  applies if the arbitrator or panel of arbitrators determines
                  that you have violated the Mass Action Waiver. If the parties
                  proceed with arbitration, the parties agree to the batching
                  procedures below.
                </p>

                <h3>Batching</h3>
                <p>
                  After proceedings before the Special Master have concluded,
                  and to the extent any Mass Actions are permitted to proceed,
                  the parties agree that Mass Actions will be batched into
                  groups of no more than 200 demands per batch by state of
                  residence (with any remaining demands batched into a single
                  group). The parties shall inform the arbitrator of the batches
                  and their composition within 14 calendar days of the
                  conclusion of proceedings before the Special Master. The
                  arbitration provider shall treat each batch of claims as one
                  case, with each case having one demand for arbitration, one
                  appointed arbitrator, and one set of administrative documents
                  and filing fees per batch. The parties shall randomly assign
                  sequential numbers to each batch, and only one batch shall
                  proceed to arbitration at a time in the order of the random
                  sequential numbers. A separate arbitrator will be appointed
                  to, and administrative and filing fees assessed for, each
                  batch as the batch proceeds to arbitration.
                </p>

                <h3>Arbitration Procedure</h3>
                <p>
                  If a party elects to commence arbitration, the arbitration
                  shall be administered by the American Arbitration Association
                  (AAA) and be governed by the applicable AAA rules to the
                  Dispute; except AAA may not administer any multiple claimant
                  or class arbitration, as the parties agree that the
                  arbitration shall be limited to the resolution only of
                  individual claims. If there is a conflict between the AAA
                  rules and the rules set forth in this Agreement, the rules set
                  forth in this Agreement shall govern. All Disputes shall be
                  resolved by a single neutral arbitrator, and both parties
                  shall have a reasonable opportunity to participate in the
                  selection of the arbitrator. The arbitrator is bound by the
                  terms of this Agreement. The arbitrator, and not any federal,
                  state, provincial, territorial, or local court or agency,
                  shall have exclusive authority to resolve all disputes arising
                  out of or relating to the interpretation, applicability,
                  enforceability, or formation of this Agreement, including, but
                  not limited to, any claim that all or any part of this
                  Agreement is void or voidable. The arbitrator shall be
                  empowered to grant whatever relief would be available in a
                  court under law or in equity. The arbitrator&apos;s award
                  shall be binding on the parties and may be entered as a
                  judgment in any court of competent jurisdiction.
                </p>

                <h3>Hearing Format</h3>
                <p>
                  Unless otherwise agreed, the arbitration shall take place in
                  California, but may proceed telephonically in the event the
                  total amount of the claim does not exceed $2,500 U.S. dollars
                  (if the claimant so chooses). In all hearing formats, the
                  arbitrator shall issue a written decision that explains the
                  essential findings and conclusions on which an award, if any,
                  is based. During the arbitration, the amount of any settlement
                  offer made by Cap&apos;t Loui or you shall not be disclosed to
                  the arbitrator until after the arbitrator determines the
                  amount, if any, to which you or Cap&apos;t Loui is entitled.
                  The discovery or exchange of non-privileged information
                  relevant to the Dispute may be allowed during the arbitration.
                </p>

                <h3>Arbitration Fees</h3>
                <p>
                  Cap&apos;t Loui will pay, or (if applicable) reimburse you,
                  for all AAA (as applicable) filing, administration, and
                  arbitration fees for any arbitration commenced by you or
                  Cap&apos;t Loui pursuant to this Agreement. You are
                  responsible for all additional costs that you incur in the
                  arbitration, including, without limitation, fees for attorneys
                  or expert witnesses.
                </p>

                <h3>Amendments to this Section</h3>
                <p>
                  Notwithstanding any provision in this Agreement to the
                  contrary, you and Cap&apos;t Loui agree that if Cap&apos;t
                  Loui makes any material amendments to the dispute resolution
                  procedure and class action waiver provisions in this
                  Agreement, Cap&apos;t Loui will notify you and you will have
                  thirty (30) calendar days from the date of notice to
                  affirmatively opt-out of any such amendments by sending a
                  written letter to the Cap&apos;t Loui Notice Address that
                  specifies: (1) your name; (2) your mailing address; and (3)
                  your request to opt-out of such amendments. If you
                  affirmatively opt-out of any future amendments, you are
                  agreeing that you will arbitrate any Dispute between us in
                  accordance with the language of this Section as stated in this
                  Agreement, without any of the proposed amendments governing.
                  If you do not affirmatively opt-out of any future amendments,
                  you will be deemed to have consented to any such future
                  amendments.
                </p>

                <h3>Severability</h3>
                <p>
                  If any provision in this Section is found to be unenforceable,
                  that provision shall be severed with the remainder of this
                  Agreement remaining in full force and effect. The foregoing
                  shall not apply to the prohibition against class or
                  representative actions; if the prohibition against class or
                  representative actions is found to be unenforceable, this
                  entire Section shall be null and void. The terms of this
                  Section shall otherwise survive any termination of this
                  Agreement.
                </p>

                <h3>Governing Law</h3>
                <p>
                  These Terms, any Dispute, or claim arising out of or related
                  to these Terms, their subject matter, or their formation (in
                  each case, including non-contractual disputes or claims) shall
                  be governed by and construed in accordance with the laws of
                  the State of New Jersey, without giving effect to any choice
                  or conflict of law provision or rule (whether of the State of
                  New Jersey or any other jurisdiction) that would cause the
                  application of the laws of any jurisdiction other than the
                  State of New Jersey.
                </p>

                <h3>Exclusive Venue for Other Controversies</h3>
                <p>
                  Cap&apos;t Loui and you agree that any controversy excluded
                  from the dispute resolution procedure and class action waiver
                  provisions in this Section (other than an individual action
                  filed in small claims court) shall be filed only in the courts
                  located within the State of New Jersey, and each party hereby
                  irrevocably and unconditionally consents and submits to the
                  exclusive jurisdiction of such courts for any such
                  controversy.
                </p>

                <h2>MISCELLANEOUS</h2>
                <p>
                  These Terms constitute the entire and exclusive understanding
                  and agreement between you and Cap&apos;t Loui regarding your
                  access to and use of the Site and supersede and replace any
                  and all prior or contemporaneous oral or written
                  understandings or agreements between you and Cap&apos;t Loui
                  regarding the subject matter hereof.
                </p>

                <p>
                  You may not assign, transfer, delegate, subcontract, or
                  sublicense any of your rights or obligations under the Terms.
                  Any attempted assignment, transfer, delegation,
                  subcontracting, or sublicense without the foregoing consent
                  will be null and void.
                </p>

                <p>
                  No agency, partnership, joint venture, employee-employer, or
                  franchiser-franchisee relationship is intended or created by
                  the Terms. Any provisions of the Terms that contemplate
                  performance or observance subsequent to the expiration or
                  termination of the Terms shall survive such expiration or
                  termination.
                </p>

                <p>
                  Our failure to exercise any right or enforce any obligation
                  under the Terms or to take action with respect to a breach by
                  you or others will not constitute a waiver of such right,
                  obligation, or breach.
                </p>

                <p>
                  If an arbitrator or a court of competent jurisdiction finds
                  any provision of the Terms to be invalid, void, or
                  unenforceable, in whole or in part, for any reason, the
                  offending provision will be enforced to the maximum extent
                  permissible and will not affect the validity or enforceability
                  of the remaining provisions, which will remain in full force
                  and effect.
                </p>

                <p>
                  The headings in the Terms are for reference purposes only and
                  do not limit or otherwise affect the meaning or interpretation
                  of any of the provisions hereof.
                </p>

                <p>
                  Except as otherwise expressly set forth herein, the Terms do
                  not and are not intended to confer any rights or remedies upon
                  any person other than the parties hereto.
                </p>

                <p>
                  Complaints regarding the Site or requests to receive further
                  information regarding use of the Site may be sent to our email
                  at{" "}
                  <a
                    href="mailto:terms@captloui.com"
                    className="text-blue-500 underline"
                  >
                    terms@captloui.com
                  </a>{" "}
                  or to our physical address at 73 Dewey St, Garfield, NJ 07026.
                </p>

                <p>
                  If you have any questions or concerns, please contact
                  Cap&apos;t Loui at{" "}
                  <a
                    href="mailto:terms@captloui.com"
                    className="text-blue-500 underline"
                  >
                    terms@captloui.com
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
